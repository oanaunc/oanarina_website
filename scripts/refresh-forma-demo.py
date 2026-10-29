"""Refresh the public static editor snapshot; never copies project/recovery directories."""
from pathlib import Path
import hashlib,json,re,shutil,sys
site=Path(__file__).resolve().parents[1]
source=site.parent/'oanarina_ui_tool'
public_build=source/'dist'
version=sys.argv[1] if len(sys.argv)>1 else '0.2.0-dev.6'
assert re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.]+)?',version),'Invalid version label'
assert (public_build/'index.html').is_file() and (public_build/'assets').is_dir(),'Build the editor first'
target=site/'demo'/'forma'
assert target.parent==site/'demo' and target.name=='forma'
original_assets={str(p.relative_to(public_build)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted((public_build/'assets').glob('*')) if p.is_file()}
keys=set()
for p in (public_build/'assets').glob('*.js'):
 keys.update(re.findall(r'oui-[a-z-]+',p.read_text()))
if target.exists():shutil.rmtree(target)
shutil.copytree(public_build,target)
for p in (target/'assets').glob('*.js'):
 text=p.read_text().replace('oui-','forma-demo-').replace('oanarina-projects','forma-website-demo-projects-v1').replace('oanarina-fonts','forma-website-demo-fonts-v1')
 p.write_text(text)
shutil.copy2(source/'LICENSE',target/'LICENSE.txt')
manifest={'version':version,'source':'https://github.com/oanaunc/oanarina_ui_tool','purpose':'Static browser demo snapshot. Only local storage/cache identifiers are namespaced to isolate website demo data. No user projects included.','sourceAssetHashes':original_assets,'storageKeys':sorted(keys),'databaseNames':['forma-website-demo-projects-v1','forma-website-demo-fonts-v1'],'demoAssetHashes':{str(p.relative_to(target)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted((target/'assets').glob('*')) if p.is_file()}}
(target/'DEMO-MANIFEST.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({'version':version,'files':sum(1 for p in target.rglob('*') if p.is_file()),'bytes':sum(p.stat().st_size for p in target.rglob('*') if p.is_file())}))
