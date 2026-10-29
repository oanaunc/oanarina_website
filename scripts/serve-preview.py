"""Loopback-only static site preview with HTTP byte ranges for video chapter tests."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
import sys
class RangeHandler(SimpleHTTPRequestHandler):
 def send_head(self):
  self.byte_range=None
  filename=Path(self.translate_path(self.path))
  header=self.headers.get('Range')
  if not header or not filename.is_file():return super().send_head()
  size=filename.stat().st_size
  match=re.fullmatch(r'bytes=(\d*)-(\d*)',header)
  if not match or not any(match.groups()):
   self.send_error(416,'Unsupported byte range');return None
  start=int(match[1]) if match[1] else max(0,size-int(match[2]))
  end=min(size-1,int(match[2])) if match[1] and match[2] else size-1
  if start>=size or start>end:
   self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.send_header('Content-Length','0');self.end_headers();return None
  stream=filename.open('rb');stream.seek(start);self.byte_range=(start,end)
  self.send_response(206);self.send_header('Content-type',self.guess_type(str(filename)));self.send_header('Accept-Ranges','bytes');self.send_header('Content-Range',f'bytes {start}-{end}/{size}');self.send_header('Content-Length',str(end-start+1));self.end_headers();return stream
 def copyfile(self,source,outputfile):
  if self.byte_range is None:return super().copyfile(source,outputfile)
  left=self.byte_range[1]-self.byte_range[0]+1
  while left:
   data=source.read(min(left,65536))
   if not data:break
   outputfile.write(data);left-=len(data)
 def log_message(self,*args):pass
if __name__=='__main__':
 port=int(sys.argv[1]) if len(sys.argv)>1 else 5182
 print(f'Preview: http://127.0.0.1:{port}',flush=True)
 ThreadingHTTPServer(('127.0.0.1',port),RangeHandler).serve_forever()
