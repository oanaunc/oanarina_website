import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import vm from 'node:vm';

const require = createRequire(process.env.ARTWORK_PLAYWRIGHT_PACKAGE || path.resolve('../oanarina_ui_tool/package.json'));
const { chromium } = require('@playwright/test');
const base = process.env.ARTWORK_TEST_URL || 'http://127.0.0.1:5182';
const context = { window: {} };
vm.runInNewContext(readFileSync('js/artwork-data.js', 'utf8'), context);
const data = context.window.ARTWORK_DATA;
const browser = await chromium.launch();
const errors = [];

try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '/shop.html');
    const cards = await page.locator('[data-artwork-id]').evaluateAll(elements => elements.map(card => ({
        id: card.dataset.artworkId,
        icons: [...card.querySelectorAll('.shop-store-link')].map(icon => ({
            store: ['saatchi', 'redbubble', 'deviantart'].find(store => icon.classList.contains('shop-store-link--' + store)),
            href: icon.getAttribute('href'),
            disabled: icon.getAttribute('aria-disabled') === 'true',
            background: getComputedStyle(icon).backgroundColor,
            logo: icon.querySelector('.saatchi-art-icon') !== null,
            logoFill: icon.querySelector('.saatchi-art-icon circle') ? getComputedStyle(icon.querySelector('.saatchi-art-icon circle')).fill : null,
            helper: icon.dataset.tooltip,
            label: icon.getAttribute('aria-label'),
            target: icon.getAttribute('target'),
            rel: icon.getAttribute('rel')
        }))
    })));
    assert.equal(cards.length, 357);
    assert.equal(new Set(cards.map(card => card.id)).size, cards.length);
    for (const card of cards) {
        assert.ok(data.artworks[card.id], card.id);
        assert.deepEqual(card.icons.map(icon => icon.store), ['saatchi', 'redbubble', 'deviantart']);
        for (const icon of card.icons) {
            assert.ok(icon.helper && icon.label);
            if (icon.store === 'saatchi') {
                assert.equal(icon.logo, true);
                assert.equal(icon.logoFill, icon.disabled ? 'rgb(170, 170, 170)' : 'rgb(51, 51, 51)');
            }
            if (icon.disabled) {
                assert.equal(icon.href, null);
                assert.equal(icon.background, 'rgb(170, 170, 170)');
            }
            else {
                assert.equal(icon.background, 'rgb(51, 51, 51)');
                assert.equal(icon.target, '_blank');
                assert.ok(icon.rel.includes('noopener'));
                assert.equal(new URL(icon.href).hostname, { saatchi: 'www.saatchiart.com', redbubble: 'www.redbubble.com', deviantart: 'www.deviantart.com' }[icon.store]);
            }
        }
        const download = card.icons.find(icon => icon.store === 'deviantart');
        assert.equal(download.href, data.deviantArtLinks[card.id] || null);
    }
    assert.equal(cards.flatMap(card => card.icons).filter(icon => icon.disabled).length, 43);
    // Identical artwork titles must retain their own store destinations.
    assert.ok(cards.find(card => card.id === 'hypnotic-2021').icons[0].href.includes('/8661314/'));
    assert.ok(cards.find(card => card.id === 'queen-of-time-2021').icons[0].href.includes('/8417008/'));
    assert.equal(cards.find(card => card.id === 'burning-flame-2016').icons[0].disabled, true);

    const filter = page.getByRole('searchbox', { name: 'Search by project or artwork title' });
    await filter.fill('Chromatic Innerverse');
    await page.waitForTimeout(700);
    assert.equal(await page.locator('.shop-project .single-album-item:visible').count(), 4);
    const first = page.locator('[data-artwork-id="the-architecture-of-unspoken-words-2026"]');
    await first.scrollIntoViewIfNeeded();
    const saatchi = first.locator('.shop-store-link--saatchi');
    assert.equal(await saatchi.locator('image').evaluate(async el => {
        const logo = new Image(); logo.src = el.href.baseVal;
        await logo.decode();
        return logo.naturalWidth;
    }), 100);
    await saatchi.hover();
    assert.equal(await saatchi.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(224, 0, 0)');
    assert.equal(await saatchi.locator('circle').evaluate(el => getComputedStyle(el).fill), 'rgb(224, 0, 0)');
    await page.screenshot({ path: '/tmp/shop-saatchi-hover.png' });
    const icon = first.locator('.shop-store-link--redbubble');
    await icon.hover();
    await page.waitForTimeout(180);
    assert.equal(await icon.evaluate(el => getComputedStyle(el, '::after').visibility), 'visible');
    assert.equal(await icon.evaluate(el => getComputedStyle(el).borderRadius), '50%');
    assert.equal(await icon.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(228, 19, 33)');
    await page.screenshot({ path: '/tmp/shop-icons-desktop.png' });
    await page.mouse.move(0, 0);
    await icon.focus();
    await page.keyboard.press('Tab');
    assert.equal(await first.locator('.shop-store-link--deviantart').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(5, 168, 68)');
    assert.equal(await first.locator('.shop-store-link--deviantart').evaluate(el => getComputedStyle(el, '::after').visibility), 'visible');
    await icon.focus();
    await page.keyboard.press('Shift+Tab');
    assert.equal(await saatchi.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(224, 0, 0)');

    for (const width of [390, 576, 768, 992]) {
        await page.setViewportSize({ width, height: 844 });
        await filter.scrollIntoViewIfNeeded();
        await filter.fill('Chromatic Innerverse');
        await page.waitForTimeout(700);
        await first.scrollIntoViewIfNeeded();
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        const bounds = await first.locator('.shop-store-link').evaluateAll(icons => icons.map(el => {
            const box = el.getBoundingClientRect();
            return { x: box.x, y: box.y, right: box.right, width: box.width, height: box.height };
        }));
        assert.ok(bounds.every(box => box.width === 36 && box.height === 36 && box.x >= 0 && box.right <= width));
        assert.ok(bounds.every(box => Math.abs(box.y - bounds[0].y) < 1));
        await icon.focus();
        if (width === 390) await page.screenshot({ path: '/tmp/shop-icons-mobile.png' });
    }
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ artworks: cards.length, icons: cards.length * 3, deviantArtLinks: 351, disabledIcons: 43, responsiveWidths: [390, 576, 768, 992, 1440], hoverAndKeyboardHelpers: true, pageErrors: errors }, null, 2));
} finally {
    await browser.close();
}
