import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';

// Reuse the local Playwright installation, as the other site checks do.
const require = createRequire(process.env.ARTWORK_PLAYWRIGHT_PACKAGE || path.resolve('../oanarina_ui_tool/package.json'));
const { chromium } = require('@playwright/test');
const base = process.env.ARTWORK_TEST_URL || 'http://127.0.0.1:5182';
const browser = await chromium.launch();
const errors = [];
let checks = 0;
const shape = '#image=the-shape-of-sound-2026';
async function verifyCatalogueCoverage(page) {
    const missing = await page.evaluate(() => [...document.querySelectorAll('#lightgallery .item[data-src]')].filter(item => {
        const work = window.ARTWORK_DATA.artworks[item.dataset.id];
        return !work?.description?.length || work.keywords?.length !== 12 || work.hashtags?.length !== 12;
    }).map(item => item.dataset.id));
    assert.deepEqual(missing, [], 'Every artwork should have a description, keywords and hashtags');
}
try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '/drawings.html' + shape);
    const room = page.locator('.artwork-room');
    await room.locator('#artwork-title').waitFor();
    await verifyCatalogueCoverage(page);
    assert.equal(await room.evaluate(el => el.open), true);
    assert.ok(await room.evaluate(el => parseFloat(getComputedStyle(el).left) >= 20));
    assert.match(await room.evaluate(el => getComputedStyle(el, '::backdrop').backgroundColor), /rgba/);
    assert.equal(await room.getByRole('button', { name: 'Back to drawings', exact: true }).count(), 1);
    assert.equal(await room.locator('#artwork-title').textContent(), 'The Shape of Sound');
    assert.match(await room.locator('.artwork-room__information > .artwork-room__eyebrow').textContent(), /2026 Sound/);
    assert.equal(await page.locator('.lg-outer').count(), 0);
    const shapeViews = await page.evaluate(() => window.ARTWORK_DATA.artworks['the-shape-of-sound-2026'].images.length);
    assert.equal(await room.locator('[data-image]').count(), shapeViews);
    assert.equal(await room.locator('[data-work]').count(), 2);
    assert.equal(await room.locator('.artwork-room__purchase').first().getAttribute('href'), 'https://www.saatchiart.com/en-ro/art/Drawing-The-Shape-of-Sound-50-x-70-cm-graphite-crayon-on-paper-2026/806648/14375965/view');
    assert.equal(await room.locator('.artwork-room__purchase--secondary').first().getAttribute('href'), 'https://www.redbubble.com/shop/ap/185189585');
    assert.equal(await room.getByRole('link', { name: /Download/ }).getAttribute('href'), 'https://www.deviantart.com/oanarinaldi/art/The-Shape-of-Sound%2C-50-x-70-cm%2C-graphite-crayon-on-paper%2C-2026-1404256023');
    assert.equal(await room.locator('.artwork-room__purchase').count(), 3);
    assert.equal(await room.locator('.artwork-room__purchase > span').first().textContent(), 'Original');
    assert.equal(await room.locator('.artwork-room__specification').count(), 0);
    assert.equal(await page.evaluate(() => {
        const ids = [...document.querySelectorAll('#lightgallery .item')].map(item => item.dataset.id);
        return new Set(ids).size === ids.length;
    }), true);
    checks++;
    for (let i = 0; i < shapeViews; i++) {
        await room.locator(`[data-image="${i}"]`).click();
        await room.locator('.artwork-room__image').evaluate(img => img.decode());
        assert.equal(await room.locator(`[data-image="${i}"]`).getAttribute('aria-pressed'), 'true');
        assert.ok(page.url().endsWith(shape));
    }
    await page.keyboard.press('ArrowLeft');
    assert.equal(await room.locator(`[data-image="${shapeViews - 2}"]`).getAttribute('aria-pressed'), 'true');
    checks++;
    await room.getByRole('button', { name: 'Enlarge artwork image' }).click();
    assert.equal(await room.locator('.artwork-room__zoom').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await room.locator('.artwork-room__zoom').isVisible(), false);
    assert.equal(await room.evaluate(el => el.open), true);
    checks++;
    assert.equal(await room.locator('details, summary, [data-action="statement"]').count(), 0);
    assert.equal(await room.locator('.artwork-room__statement p').count(), 5);
    assert.equal(await room.locator('.artwork-room__statement').isVisible(), true);
    assert.equal(await room.locator('.artwork-room__explore > .artwork-room__related').count(), 1);
    assert.equal(await room.locator('.artwork-room__keywords').isVisible(), true);
    assert.equal(await room.locator('.artwork-room__keywords span').count(), 12);
    assert.match(await room.locator('.artwork-room__facts').textContent(), /50 × 70 cm/);
    assert.ok(await room.locator('.artwork-room__statement').evaluate(el => el.scrollHeight > el.clientHeight));
    await room.locator('.artwork-room__statement').focus();
    await page.keyboard.press('End');
    await page.waitForFunction(() => document.querySelector('.artwork-room__statement').scrollTop > 0);
    assert.equal(await room.locator('.artwork-room__scroll').evaluate(el => el.scrollTop), 0);
    checks++;
    await room.locator('[data-work]').first().click();
    assert.equal(await room.locator('#artwork-title').textContent(), 'The Resonance Between Light and Silence');
    assert.equal(await room.locator('.artwork-room__thumbnails').isVisible(), true);
    assert.equal(await room.locator('.artwork-room__about').isVisible(), true);
    assert.equal(await room.locator('.artwork-room__statement p').count(), 3);
    assert.equal(await room.locator('.artwork-room__purchase').count(), 3);
    assert.equal(await room.locator('.artwork-room__explore').evaluate(el => el.scrollTop), 0);
    await room.getByRole('button', { name: 'Previous artwork', exact: true }).click();
    assert.equal(await room.locator('#artwork-title').textContent(), 'The Shape of Sound');
    assert.equal(await room.locator('[data-image="0"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await room.locator('.artwork-room__explore').evaluate(el => el.scrollTop), 0);
    checks++;
    await page.keyboard.press('ArrowLeft');
    assert.equal(await room.locator('#artwork-title').textContent(), 'The Anatomy of Velocity');
    await page.keyboard.press('ArrowRight');
    assert.equal(await room.locator('#artwork-title').textContent(), 'The Shape of Sound');
    await room.locator('.artwork-room__image').evaluate(img => img.decode());
    await page.waitForTimeout(650); // Capture the finished image and panel transitions.
    assert.ok(await room.evaluate(el => {
        const related = el.querySelector('.artwork-room__related').getBoundingClientRect();
        const visual = el.querySelector('.artwork-room__visual').getBoundingClientRect();
        const explore = el.querySelector('.artwork-room__explore').getBoundingClientRect();
        const image = el.querySelector('.artwork-room__image').getBoundingClientRect();
        const information = el.querySelector('.artwork-room__information').getBoundingClientRect();
        const keywords = el.querySelector('.artwork-room__keywords').getBoundingClientRect();
        const facts = el.querySelector('.artwork-room__facts').getBoundingClientRect();
        const statement = el.querySelector('.artwork-room__statement').getBoundingClientRect();
        const links = [...el.querySelectorAll('.artwork-room__purchase')].map(link => link.getBoundingClientRect());
        return visual.right < explore.left && explore.right < information.left
            && image.height > 700 && image.width > 450
            && related.right < information.left && explore.bottom <= el.getBoundingClientRect().bottom && keywords.bottom <= information.bottom
            && facts.bottom < statement.top && statement.height > 280
            && links.every(link => Math.abs(link.top - links[0].top) < 1);
    }));
    await page.screenshot({ path: '/tmp/artwork-viewer-desktop.png' });
    checks++;
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !location.hash);
    assert.equal(await room.evaluate(el => el.open), false);
    assert.equal(await page.evaluate(() => location.hash), '');
    assert.equal(await page.locator('body').evaluate(el => el.classList.contains('artwork-room-open')), false);
    const item = page.locator('[data-id="the-shape-of-sound-2026"]');
    await item.scrollIntoViewIfNeeded();
    await item.focus();
    await page.keyboard.press('Enter');
    await room.getByRole('button', { name: 'Close artwork viewer' }).click();
    await page.waitForFunction(() => !location.hash);
    assert.equal(await item.evaluate(el => el === document.activeElement), true);
    await item.click();
    assert.equal(await room.evaluate(el => el.open), true);
    await page.mouse.click(5, 5);
    await page.waitForFunction(() => !document.querySelector('.artwork-room').open);
    checks++;
    await page.goto(base + '/paintings.html#image=velocity-of-fire-2026');
    await room.locator('#artwork-title').waitFor();
    await verifyCatalogueCoverage(page);
    assert.equal(await room.locator('#artwork-title').textContent(), 'Velocity of Fire');
    assert.equal(await room.locator('.artwork-room__purchase').count(), 3);
    assert.match(await room.locator('.artwork-room__facts').textContent(), /oil on canvas/i);
    await room.locator('.artwork-room__image').evaluate(img => img.decode());
    await page.waitForTimeout(650);
    await page.screenshot({ path: '/tmp/artwork-viewer-painting.png' });
    await room.getByRole('button', { name: 'Previous artwork', exact: true }).click();
    assert.match(await room.locator('.artwork-room__position').textContent(), /^(\d+) \/ \1$/);
    await room.getByRole('button', { name: 'Next artwork', exact: true }).click();
    assert.equal(await room.locator('#artwork-title').textContent(), 'Velocity of Fire');
    checks++;
    for (const [id, title, deviationId] of [
        ['she-who-walks-between-shadows-2026', 'She Who Walks Between Shadows', '1307529818'],
        ['threshold-of-silence-2026', 'Threshold of Silence', '1288481017']
    ]) {
        await page.goto(base + '/drawings.html#image=' + id);
        assert.equal(await room.locator('#artwork-title').textContent(), title);
        assert.ok((await room.getByRole('link', { name: /Download/ }).getAttribute('href')).endsWith(deviationId));
        assert.equal(await room.locator('.artwork-room__purchase').count(), 3);
    }
    checks++;
    for (const [category, id] of [['drawings', 'zephyr-2014'], ['paintings', 'mirror-2011']]) {
        await page.goto(base + '/' + category + '.html#image=' + id);
        assert.equal(await room.getByRole('link', { name: /Download/ }).count(), 0);
        assert.equal(await room.evaluate(el => el.open), true);
    }
    checks++;
    for (const width of [390, 768]) {
        const mobile = await browser.newPage({ viewport: { width, height: 844 }, hasTouch: true, reducedMotion: 'reduce' });
        mobile.on('pageerror', error => errors.push(error.message));
        await mobile.goto(base + '/drawings.html' + shape);
        const mobileRoom = mobile.locator('.artwork-room');
        await mobileRoom.locator('.artwork-room__image').evaluate(img => img.decode());
        assert.equal(await mobileRoom.evaluate(el => getComputedStyle(el).animationName), 'none');
        assert.equal(await mobileRoom.locator('.artwork-room__image').evaluate(el => el.getAnimations().length), 0);
        assert.ok(await mobileRoom.evaluate(el => el.scrollWidth <= innerWidth));
        assert.ok(await mobileRoom.locator('.artwork-room__scroll').evaluate(el => el.scrollWidth <= el.clientWidth + 1));
        await mobile.screenshot({ path: `/tmp/artwork-viewer-${width}.png` });
        await mobileRoom.locator('[data-image="2"]').click();
        await mobileRoom.locator('.artwork-room__image').evaluate(img => img.decode());
        assert.ok(mobile.url().endsWith(shape));
        assert.equal(await mobileRoom.locator('.artwork-room__keywords').isVisible(), true);
        assert.equal(await mobileRoom.locator('.artwork-room__statement p').count(), 5);
        assert.equal(await mobileRoom.locator('details, summary').count(), 0);
        assert.ok(await mobileRoom.evaluate(el => {
            const links = [...el.querySelectorAll('.artwork-room__purchase')].map(link => link.getBoundingClientRect());
            return links.every(link => Math.abs(link.top - links[0].top) < 1 && link.right <= el.getBoundingClientRect().right);
        }));
        await mobileRoom.locator('[data-work]').first().click();
        assert.equal(await mobileRoom.locator('#artwork-title').textContent(), 'The Resonance Between Light and Silence');
        assert.equal(await mobileRoom.locator('.artwork-room__scroll').evaluate(el => el.scrollTop), 0);
        await mobile.close();
        checks++;
    }
    // paintings.html already loads main.js without its AOS dependency.
    const existingPageErrors = errors.filter(error => error === 'AOS is not defined');
    const newPageErrors = errors.filter(error => error !== 'AOS is not defined');
    assert.deepEqual(newPageErrors, []);
    console.log(JSON.stringify({ passed: checks, pageErrors: newPageErrors, existingPageErrors, screenshots: ['/tmp/artwork-viewer-desktop.png', '/tmp/artwork-viewer-painting.png', '/tmp/artwork-viewer-390.png', '/tmp/artwork-viewer-768.png'] }, null, 2));
} finally {
    await browser.close();
}
