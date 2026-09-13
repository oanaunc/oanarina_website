"""Download completed Higgsfield results and encode for frequent, reversible seeking."""
import json,subprocess,urllib.request,concurrent.futures,tempfile,shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
MEDIA=ROOT/'media'/'motion'
FFMPEG=shutil.which('ffmpeg')
if not FFMPEG: raise SystemExit('Install ffmpeg before preparing the motion assets.')
def prepare(job):
 if job['status']!='completed':return
 target=MEDIA/(job['name']+'.mp4')
 if target.exists():return
 with tempfile.TemporaryDirectory(prefix='oana-motion-') as folder:
  raw=Path(folder)/'source.mp4'
  urllib.request.urlretrieve(job['result_url'],raw)
  filters=['-vf','crop='+job['crop']] if job.get('crop') else []
  subprocess.run([FFMPEG,'-loglevel','error','-y','-i',str(raw),*filters,'-an','-c:v','libx264','-threads','2','-preset','fast','-crf','22','-g','6','-keyint_min','6','-sc_threshold','0','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True)
  print(job['name'],target.stat().st_size,flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
 list(pool.map(prepare,json.loads((MEDIA/'generations.json').read_text())))
