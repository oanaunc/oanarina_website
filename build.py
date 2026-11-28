import argparse
from datetime import date, datetime, time, timezone
from email.utils import format_datetime
from html import escape
import json
from pathlib import Path
import re
import shutil
from urllib.parse import urlsplit
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parent
DIST = ROOT / 'dist'
NAME = 'Oanarina Journal'
DESCRIPTION = 'Daily reads on architecture, interiors, creativity, and everyday life.'
APP_CATALOG = 'https://oanarinaldi.com/apps.html'


def public_url(value):
    parsed = urlsplit(value)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
        raise ValueError(f'Expected a public HTTPS URL: {value!r}')
    return value


def load_posts(today):
    posts = []
    seen = set()
    for path in sorted((ROOT / 'content').glob('*.json'), key=lambda article: article.stem):
        post = json.loads(path.read_text(encoding='utf-8'))
        day = date.fromisoformat(post['date'])
        if not re.fullmatch(rf'{day}(?:-[a-z0-9-]+)?', path.stem):
            raise ValueError(f'Date and filename differ: {path.name}')
        slug = post['slug']
        if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', slug) or slug in seen:
            raise ValueError(f'Invalid or duplicate article slug: {slug}')
        seen.add(slug)
        if post['image'] != f'{slug}.webp' or not (ROOT / 'assets' / post['image']).is_file():
            raise ValueError(f'Missing or misnamed article image: {post["image"]}')
        if not (post['title'].strip() and post['description'].strip() and post['alt'].strip() and post['sections']):
            raise ValueError(f'Incomplete article: {slug}')
        for link in post.get('sources', []) + post['app']['links']:
            public_url(link['url'])
        if not post['app']['links']:
            raise ValueError(f'Missing app links: {slug}')
        if day <= today:
            posts.append(post)
    if not posts:
        raise ValueError('The journal needs a published article.')
    return sorted(posts, key=lambda post: post['date'], reverse=True)


def post_path(post):
    return f'/articles/{post["slug"]}/'


def image_path(post):
    return f'/assets/{post["image"]}'


def date_tag(post):
    day = date.fromisoformat(post['date'])
    return f'<time datetime="{day}">{day:%B} {day.day}, {day.year}</time>'


def metadata(post):
    return f'<p class="meta">{escape(post["category"])} <span aria-hidden="true">·</span> {date_tag(post)}</p>'


def cover(post):
    alt = escape(post['alt'], quote=True)
    return f'<img src="{image_path(post)}" alt="{alt}" width="1500" height="1000" fetchpriority="high">'


def page(site, path, title, description, main, image, article=False):
    canonical = escape(site + path, quote=True)
    title = escape(title, quote=True)
    description = escape(description, quote=True)
    social_image = escape(site + image, quote=True)
    kind = 'article' if article else 'website'
    return f'''<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <link rel="canonical" href="{canonical}">
    <link rel="alternate" type="application/rss+xml" title="{NAME}" href="/rss.xml">
    <meta property="og:type" content="{kind}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:image" content="{social_image}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/assets/oanarina-o.png" type="image/png">
    <link rel="stylesheet" href="/assets/journal.css">
</head>
<body>
    <a href="#main" class="skip">Skip to content</a>
    <header class="site-header">
        <div class="wrap">
            <a href="/" class="brand"><img src="/assets/oanarina-o.png" alt="" width="26" height="26"> Oanarina Journal</a>
            <nav class="nav" aria-label="Main navigation">
                <a href="/#archive">Archive</a>
                <a href="{APP_CATALOG}">Apps</a>
                <a href="/rss.xml">RSS</a>
            </nav>
        </div>
    </header>
    <main id="main">{main}</main>
    <footer class="footer">
        <div class="wrap">
            <small>© Oanarina Journal</small>
            <nav aria-label="Footer navigation"><a href="https://oanarinaldi.com/">Oana Rinaldi</a><a href="{APP_CATALOG}">Explore the apps</a></nav>
        </div>
    </footer>
</body>
</html>
'''


def home(site, posts):
    lead = posts[0]
    url = post_path(lead)
    archive = '\n'.join(
        f'<li><a href="{post_path(post)}">{date_tag(post)} <span>{escape(post["title"])}</span></a></li>'
        for post in posts
    )
    main = f'''
        <div class="wrap">
            <header class="masthead"><h1>{NAME}</h1><p>{DESCRIPTION}</p></header>
            <article class="lead">
                <a href="{url}" aria-label="Read {escape(lead['title'], quote=True)}">{cover(lead)}</a>
                <div class="lead-copy">
                    {metadata(lead)}
                    <h2><a href="{url}">{escape(lead['title'])}</a></h2>
                    <p>{escape(lead['description'])}</p>
                    <a class="read-link" href="{url}">Read the article <span aria-hidden="true">→</span></a>
                </div>
            </article>
            <section class="archive" id="archive"><h2>Archive</h2><ul class="archive-list">{archive}</ul></section>
        </div>'''
    return page(site, '/', NAME, DESCRIPTION, main, image_path(lead))


def link_items(links):
    return ''.join(f'<li><a href="{escape(link["url"], quote=True)}">{escape(link["label"])}</a></li>' for link in links)


def article(site, post):
    sections = []
    for section in post['sections']:
        paragraphs = ''.join(f'<p>{escape(paragraph)}</p>' for paragraph in section['paragraphs'])
        sections.append(f'<section><h2>{escape(section["heading"])}</h2>{paragraphs}</section>')
    sources = post.get('sources', [])
    reading = f'<section class="sources"><h2>Further reading</h2><ul>{link_items(sources)}</ul></section>' if sources else ''
    app = post['app']
    main = f'''
        <article>
            <header class="article-head">
                {metadata(post)}
                <h1>{escape(post['title'])}</h1>
                <p class="dek">{escape(post['description'])}</p>
            </header>
            <figure class="wrap hero">{cover(post)}<figcaption>{escape(post['image_caption'])}</figcaption></figure>
            <div class="prose">
                {''.join(sections)}
                {reading}
                <section class="app" aria-labelledby="app-title">
                    <p class="meta">From our studio</p>
                    <h2 id="app-title">{escape(app['name'])}</h2>
                    <p>{escape(app['description'])}</p>
                    <ul class="app-links">{link_items(app['links'])}</ul>
                </section>
                <a class="read-link" href="/#archive">Browse the journal</a>
            </div>
        </article>'''
    title = f'{post["title"]} · {NAME}'
    return page(site, post_path(post), title, post['description'], main, image_path(post), article=True)


def write(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding='utf-8')


def feed(site, posts):
    entries = []
    for post in posts[:30]:
        url = escape(site + post_path(post))
        published = datetime.combine(date.fromisoformat(post['date']), time(), timezone.utc)
        entries.append(f'''<item>
    <title>{escape(post['title'])}</title><link>{url}</link><guid isPermaLink="true">{url}</guid>
    <pubDate>{format_datetime(published, usegmt=True)}</pubDate>
    <description>{escape(post['description'])}</description>
</item>''')
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>{NAME}</title><link>{escape(site)}/</link><description>{DESCRIPTION}</description>
<atom:link href="{escape(site)}/rss.xml" rel="self" type="application/rss+xml" />
{''.join(entries)}
</channel></rss>
'''


def build(site):
    today = datetime.now(ZoneInfo('Europe/Bucharest')).date()
    posts = load_posts(today)
    staging = ROOT / '.dist-build'
    if staging.exists():
        shutil.rmtree(staging)
    (staging / 'assets').mkdir(parents=True)
    for name in {'journal.css', 'oanarina-o.png', *(post['image'] for post in posts)}:
        shutil.copyfile(ROOT / 'assets' / name, staging / 'assets' / name)
    write(staging / 'index.html', home(site, posts))
    write(staging / '404.html', page(site, '/404.html', f'Page not found · {NAME}', DESCRIPTION,
                                     '<div class="wrap masthead"><h1>Page not found</h1><p><a href="/">Back to the journal</a></p></div>',
                                     image_path(posts[0])))
    for post in posts:
        write(staging / post_path(post).strip('/') / 'index.html', article(site, post))
    urls = ['/', *(post_path(post) for post in posts)]
    sitemap = ''.join(f'<url><loc>{escape(site + url)}</loc></url>' for url in urls)
    write(staging / 'sitemap.xml', f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{sitemap}</urlset>\n')
    write(staging / 'rss.xml', feed(site, posts))
    write(staging / 'robots.txt', f'User-agent: *\nAllow: /\nSitemap: {site}/sitemap.xml\n')
    if DIST.exists():
        shutil.rmtree(DIST)
    staging.rename(DIST)
    print(f'Built {len(posts)} article(s) for {site}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Build the Oanarina Journal static site.')
    parser.add_argument('--site', default='https://oanarina-journal.pages.dev')
    arguments = parser.parse_args()
    build(public_url(arguments.site.rstrip('/')))
