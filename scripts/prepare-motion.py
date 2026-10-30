"""Download completed Higgsfield results and encode for frequent, reversible seeking."""
import json,subprocess,urllib.request,concurrent.futures,tempfile,shutil,re
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
MEDIA=ROOT/'media'/'motion'
FFMPEG=shutil.which('ffmpeg')
if not FFMPEG: raise SystemExit('Install ffmpeg before preparing the motion assets.')
# Historical generation records include retired alternatives. Never redeploy those.
runtime=(ROOT/'js/motion-manifest.js').read_text()+(ROOT/'js/experience.js').read_text()
ACTIVE={Path(p).name for p in re.findall(r'media/motion/[^\s\"\'?#]+\.mp4',runtime)}
def prepare(job):
 if job['status']!='completed':return
 target=MEDIA/(job['name']+'.mp4')
 if target.name not in ACTIVE:return
 if target.exists():return
 with tempfile.TemporaryDirectory(prefix='oana-motion-') as folder:
  raw=Path(folder)/'source.mp4'
  urllib.request.urlretrieve(job['result_url'],raw)
  encoding=job.get('encoding',{})
  chain=['crop='+job['crop']] if job.get('crop') else []
  if encoding.get('videoFilter'):chain.append(encoding['videoFilter'])
  filters=['-vf',','.join(chain)] if chain else []
  gop=str(encoding.get('keyframeIntervalFrames',6))
  subprocess.run([FFMPEG,'-loglevel','error','-y','-i',str(raw),*filters,'-an','-c:v','libx264','-threads','2','-preset',encoding.get('preset','fast'),'-crf',str(encoding.get('crf',22)),'-g',gop,'-keyint_min',gop,'-sc_threshold','0','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True)
  print(job['name'],target.stat().st_size,flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
 list(pool.map(prepare,json.loads((MEDIA/'generations.json').read_text())))
