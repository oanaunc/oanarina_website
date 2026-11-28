# Oanarina Journal

An independent lifestyle journal about architecture, interiors, creativity, and everyday life. The public site is hosted on Cloudflare Pages at `https://oanarina-journal.pages.dev/`.

## Publish an article

Use one `content/YYYY-MM-DD.json` file per scheduled issue, following the first issue’s fields. The launch includes several same-day articles with filename suffixes. Put the article’s web-ready cover in `assets/<slug>.webp` with descriptive alt text in the article. Use the `app` field for one relevant studio app and its current store or product links. The site uses Europe/Bucharest dates.

Build and preview from this directory with Python 3.9 or newer.

```sh
python3 build.py
python3 -m http.server 8093 --directory dist
```

Deploy the `dist/` folder to the existing project using the authorized Wrangler session.

```sh
npx --yes wrangler@4.148.0 pages deploy dist --project-name oanarina-journal --branch main
```

After deploying, open the article’s permanent URL and confirm it appears in the live archive and RSS feed. Only the generated `dist/` folder is uploaded to Cloudflare. GitHub stores the source under the `oanarina-journal` branch of `oanaunc/oanarina_website`.
