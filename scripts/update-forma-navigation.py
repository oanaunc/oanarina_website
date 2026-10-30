"""Keep static site Algorithms discovery consistent; excludes vendored demos/editor bundles."""
from pathlib import Path
import re
compact='''<nav class="forma-site-discovery" aria-label="Site apps"><details><summary>Algorithms</summary><a href="{prefix}apps.html">All apps</a><a href="{prefix}forma.html">Forma</a><a href="{prefix}photo-editor.html">Photo Editor for Mac</a><a href="{prefix}archi-tool.html">Archi Tool</a></details></nav>'''
style='''<style>.forma-site-discovery{font:13px/1.6 system-ui,sans-serif;margin:14px 0 24px;color:inherit}.forma-site-discovery details{position:relative;width:max-content;max-width:100%;border:1px solid #9c889a77;border-radius:9px;padding:8px 13px;background:#f6f1f8;color:#49344f}.forma-site-discovery summary{cursor:pointer;list-style:revert}.forma-site-discovery a{display:block;padding:7px 8px;color:#674c78;text-decoration:none}.forma-site-discovery a:hover{text-decoration:underline}.forma-site-discovery a:focus-visible,.forma-site-discovery summary:focus-visible{outline:2px solid #9670af;outline-offset:3px}</style>'''
changed=[]
for path in list(Path('.').glob('*.html'))+[Path('wle/index.html')]:
 s=path.read_text();before=s
 s=re.sub(r'(href=["\'])(?:algorithm|algorithms)\.html([?#"\'])',r'\1apps.html\2',s)
 # Remove the former placement in Architecture; Forma lives in Algorithms.
 s=re.sub(r'\s*<li><a href="ui-tool.html">UI Tool for Mac</a></li>', '',s)
 pattern=r'(<li><a href="apps.html">Algorithms</a>\s*<ul class="dropdown">)(.*?)(</ul>)'
 def menu(m):
  items=m[2].replace('<a href="https://aetherfold4d.com">Aetherfold 4D</a>', '<a href="https://aetherfold4d.com" target="_blank" rel="noopener">Aetherfold 4D</a>')
  if 'href="forma.html"' not in items:
   forma='\n                                            <li><a href="forma.html">Forma</a></li>'
   if '<li><a href="photo-editor.html">Photo Editor for Mac</a></li>' in items:
    items=items.replace('<li><a href="photo-editor.html">Photo Editor for Mac</a></li>','<li><a href="photo-editor.html">Photo Editor for Mac</a></li>'+forma)
   else: items+=forma+'\n'
  return m[1]+items+m[3]
 s,count=re.subn(pattern,menu,s,flags=re.S)
 if not count and path.name not in ['algorithm.html','algorithms.html'] and 'forma-site-discovery' not in s:
  prefix='../' if path.parent.name=='wle' else ''
  s=s.replace('</head>',style+'</head>',1) if '</head>' in s else s.replace('<main',style+'<main',1)
  nav=compact.format(prefix=prefix)
  if prefix:
   nav=nav.replace('class="forma-site-discovery"','class="forma-site-discovery" style="position:fixed;bottom:12px;left:15px;z-index:10000;margin:0"')
   s=s.replace('</body>',nav+'</body>',1)
  else:
   s=re.sub(r'(<body\b[^>]*>)',lambda m:m[1]+nav,s,count=1,flags=re.I) if '<body' in s else s.replace('<main',nav+'<main',1)
 if path.name in ['ui-tool-guide.html','ui-tool-privacy.html']:
  s=s.replace('href="ui-tool.html','href="forma.html')
 if s!=before:path.write_text(s);changed.append(str(path))
print('Updated navigation in',len(changed),'pages')
