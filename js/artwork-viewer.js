/* Shared artwork room for drawings and paintings. Grid content remains the source
   of truth; richer image sets and writing live in artwork-data.js. */
(function () {
    'use strict';
    const gallery = document.getElementById('lightgallery');
    if (!gallery) return;
    window.artworkViewerActive = true;
    const data = window.ARTWORK_DATA || { artworks: {}, shopLinks: {} };
    const normalize = value => value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const category = /paintings\.html$/.test(location.pathname) ? 'Paintings' : 'Drawings';
    const works = Array.from(gallery.querySelectorAll('.item[data-src]')).map((item, index) => {
        const caption = document.createElement('div');
        caption.innerHTML = item.dataset.subHtml || '';
        const lines = Array.from(caption.querySelectorAll('h4,h6')).map(el => el.textContent.trim());
        const raw = lines[0] || item.querySelector('img').alt || 'Untitled';
        const specific = data.artworks[item.dataset.id] || {};
        const separator = raw.search(/,\s*(?=\d|(?:oil|acrylic|ink|graphite|charcoal|pastel|watercolou?r|mixed|pencil|crayon|gouache|colou?red|a\d)\b)|\s+[—–]\s+(?=\d)/i);
        const title = specific.title || (separator >= 0 ? raw.slice(0, separator) : raw.split(',')[0]);
        const project = (lines.find(line => /From the project:/i.test(line)) || '').replace(/From the project:\s*/i, '').replace(/\.$/, '');
        const status = lines.find(line => /original artwork/i.test(line)) || '';
        const work = {
            index, item, id: item.dataset.id || 'artwork-' + index, title, project,
            summary: raw.slice(title.length).replace(/^[,\s—–]+/, ''),
            available: /IS AVAILABLE/i.test(status),
            unavailable: /IS NOT AVAILABLE/i.test(status),
            collection: (status.match(/Collection:\s*(.*)/i) || [])[1] || '',
            thumb: item.querySelector('img').getAttribute('src'),
            images: [{ src: item.dataset.src, thumb: item.querySelector('img').getAttribute('src'), label: 'Full artwork' }],
            ...specific
        };
        work.links = { ...(data.shopLinks[work.id] || data.shopLinks[normalize(title)] || {}), deviantart: (data.deviantArtLinks || {})[work.id] };
        return work;
    });
    if (!works.length) return;
    window.initArtworkProjectZones?.(gallery, works);
    const dialog = document.createElement('dialog');
    dialog.className = 'artwork-room';
    dialog.setAttribute('aria-labelledby', 'artwork-title');
    dialog.innerHTML = `
        <div class="artwork-room__panel">
        <header class="artwork-room__header">
            <div class="artwork-room__identity"><span>Oana Rinaldi</span><button type="button" class="artwork-room__category" data-action="close"></button></div>
            <nav class="artwork-room__navigation" aria-label="Artwork navigation">
                <button type="button" data-action="prev" aria-label="Previous artwork">← <span>Previous</span></button>
                <span class="artwork-room__position"></span>
                <button type="button" data-action="next" aria-label="Next artwork"><span>Next</span> →</button>
            </nav>
            <button type="button" class="artwork-room__close" data-action="close" aria-label="Close artwork viewer">×</button>
        </header>
        <div class="artwork-room__scroll">
            <div class="artwork-room__layout">
                <section class="artwork-room__visual" aria-label="Artwork images">
                    <button type="button" class="artwork-room__stage" data-action="zoom" aria-label="Enlarge artwork image">
                        <img class="artwork-room__image" alt="">
                        <span class="artwork-room__enlarge" aria-hidden="true">⤢</span>
                    </button>
                    <div class="artwork-room__image-meta"><span class="artwork-room__image-label"></span><span class="artwork-room__image-count"></span></div>
                </section>
                <aside class="artwork-room__explore" aria-label="Artwork views and related works">
                    <section class="artwork-room__views" aria-label="Additional artwork images">
                        <h2>Artwork views</h2>
                        <div class="artwork-room__thumbnails" role="group" aria-label="Views of this artwork"></div>
                    </section>
                    <section class="artwork-room__related" aria-label="More works from this project">
                        <div class="artwork-room__related-heading"><div><p class="artwork-room__eyebrow">Continue exploring</p><h2></h2></div><span class="artwork-room__related-count"></span></div>
                        <div class="artwork-room__related-list"></div>
                    </section>
                </aside>
                <article class="artwork-room__information">
                    <p class="artwork-room__eyebrow"></p>
                    <h1 id="artwork-title"></h1>
                    <section class="artwork-room__details" aria-label="Artwork details"><div class="artwork-room__facts"></div></section>
                    <div class="artwork-room__collect"></div>
                    <section class="artwork-room__about"></section>
                </article>
            </div>
        </div>
        <div class="artwork-room__zoom" hidden><button type="button" data-action="unzoom" aria-label="Return to artwork details">← Back to artwork</button><img alt=""></div>
        </div>
        <nav class="artwork-room__catalogue" aria-labelledby="artwork-catalogue-label">
            <span id="artwork-catalogue-label"></span>
            <div class="artwork-room__catalogue-controls">
                <button type="button" data-action="catalogue-prev" aria-label="Scroll artwork thumbnails left">←</button>
                <div class="artwork-room__catalogue-list"></div>
                <button type="button" data-action="catalogue-next" aria-label="Scroll artwork thumbnails right">→</button>
            </div>
        </nav>`;
    document.body.append(dialog);
    const $ = selector => dialog.querySelector(selector);
    $('.artwork-room__category').textContent = '← ' + category;
    $('.artwork-room__category').setAttribute('aria-label', 'Back to ' + category.toLowerCase());
    let current = 0, imageIndex = 0, opener = null;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const motionEnabled = () => !reducedMotion.matches && !document.documentElement.classList.contains('motion-off');
    function reveal(element, distance = 12, delay = 0) {
        element.getAnimations().forEach(animation => animation.cancel());
        if (!motionEnabled() || !dialog.open) return;
        element.animate([
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 420, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
    }
    $('.artwork-room__image').addEventListener('load', () => reveal($('.artwork-room__image'), 8));
    const stage = $('.artwork-room__stage');
    stage.addEventListener('pointermove', event => {
        if (!motionEnabled() || event.pointerType !== 'mouse') return;
        const rect = stage.getBoundingClientRect();
        stage.style.setProperty('--art-light-x', `${(event.clientX - rect.left) / rect.width * 100}%`);
        stage.style.setProperty('--art-light-y', `${(event.clientY - rect.top) / rect.height * 100}%`);
    });
    stage.addEventListener('pointerleave', () => {
        stage.style.removeProperty('--art-light-x');
        stage.style.removeProperty('--art-light-y');
    });
    const node = (tag, className, content) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (content) el.textContent = content;
        return el;
    };
    const catalogue = $('.artwork-room__catalogue-list');
    $('#artwork-catalogue-label').textContent = 'All ' + category.toLowerCase();
    works.forEach(work => {
        const button = node('button', 'artwork-room__catalogue-work');
        button.type = 'button'; button.dataset.catalogueWork = work.index;
        button.setAttribute('aria-label', 'View ' + work.title);
        button.title = work.title; button.tabIndex = -1;
        const img = node('img'); img.src = work.thumb; img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
        button.append(img); catalogue.append(button);
    });
    function syncCatalogue(focus = false) {
        const buttons = catalogue.children;
        Array.from(buttons).forEach((button, index) => {
            button.tabIndex = index === current ? 0 : -1;
            if (index === current) button.setAttribute('aria-current', 'true');
            else button.removeAttribute('aria-current');
        });
        if (!dialog.open) return;
        const selected = buttons[current];
        const rail = catalogue.getBoundingClientRect(), thumb = selected.getBoundingClientRect();
        if (thumb.left < rail.left || thumb.right > rail.right) {
            catalogue.scrollLeft += thumb.left - rail.left - (rail.width - thumb.width) / 2;
        }
        if (focus) selected.focus({ preventScroll: true });
    }
    function link(url, className, title, subtitle) {
        const el = node('a', className);
        el.href = url; el.target = '_blank'; el.rel = 'noopener noreferrer';
        el.append(node('span', '', title), node('small', '', subtitle), node('span', 'artwork-room__external', '↗'));
        return el;
    }
    function showImage(index, focus = false) {
        imageIndex = index;
        const work = works[current], image = work.images[index];
        $('.artwork-room__image').src = image.src;
        $('.artwork-room__image').alt = work.title + ' — ' + image.label;
        $('.artwork-room__image-label').textContent = image.label;
        $('.artwork-room__image-count').textContent = String(index + 1).padStart(2, '0') + ' / ' + String(work.images.length).padStart(2, '0');
        $('.artwork-room__zoom img').src = image.src;
        $('.artwork-room__zoom img').alt = work.title + ' — ' + image.label;
        dialog.querySelectorAll('[data-image]').forEach((button, i) => {
            button.setAttribute('aria-pressed', String(i === index));
            if (focus && i === index) button.focus();
        });
    }
    function render(index) {
        current = (index + works.length) % works.length;
        const work = works[current];
        $('.artwork-room__zoom').hidden = true;
        $('.artwork-room__scroll').scrollTop = 0;
        $('.artwork-room__information').scrollTop = 0;
        $('.artwork-room__position').textContent = (current + 1) + ' / ' + works.length;
        syncCatalogue();
        $('.artwork-room__information > .artwork-room__eyebrow').textContent = work.project ? 'From the project · ' + work.project : category;
        $('#artwork-title').textContent = work.title;
        const collect = $('.artwork-room__collect'); collect.replaceChildren();
        const purchaseLinks = node('div', 'artwork-room__purchase-links');
        if (work.available || work.unavailable) {
            const status = node('p', 'artwork-room__availability' + (work.available ? ' is-available' : ''), work.available ? 'Original artwork available' : 'Original artwork unavailable');
            collect.append(status);
        }
        if (work.links.saatchi) {
            const original = /^original$/i.test(work.links.saatchi.label);
            if (!original || !work.unavailable) purchaseLinks.append(link(work.links.saatchi.url, 'artwork-room__purchase', original ? 'Original' : work.links.saatchi.label, 'Saatchi Art'));
        }
        if (work.links.redbubble) purchaseLinks.append(link(work.links.redbubble, 'artwork-room__purchase artwork-room__purchase--secondary', 'Prints & objects', 'Redbubble'));
        if (work.links.deviantart) purchaseLinks.append(link(work.links.deviantart, 'artwork-room__purchase artwork-room__purchase--secondary artwork-room__purchase--download', 'Download', 'DeviantArt'));
        if (purchaseLinks.childElementCount) collect.append(purchaseLinks);
        collect.hidden = !collect.childElementCount;
        const about = $('.artwork-room__about'); about.replaceChildren(); about.hidden = !work.description;
        if (work.description) {
            about.append(node('h2', '', 'About the work'));
            const statement = node('div', 'artwork-room__statement');
            statement.setAttribute('role', 'region'); statement.setAttribute('aria-label', 'Artwork description'); statement.tabIndex = 0;
            work.description.forEach(paragraph => statement.append(node('p', '', paragraph)));
            about.append(statement);
        }
        const facts = $('.artwork-room__facts'); facts.replaceChildren();
        const dl = node('dl');
        [['Artist', 'Oana Rinaldi'], ['Medium', work.medium], ['Dimensions', work.dimensions], ['Year', work.year], ['Artwork', !work.medium ? work.summary : ''], ['Project', work.project], ['Collection', work.collection]].forEach(([label, value]) => {
            if (value) dl.append(node('dt', '', label), node('dd', '', value));
        });
        facts.append(dl);
        if (work.keywords) {
            facts.append(node('h3', '', 'Themes & keywords'));
            const keywords = node('div', 'artwork-room__keywords'); work.keywords.forEach(word => keywords.append(node('span', '', word))); facts.append(keywords);
        }
        const thumbnails = $('.artwork-room__thumbnails'); thumbnails.replaceChildren(); thumbnails.hidden = work.images.length < 2;
        $('.artwork-room__views').hidden = work.images.length < 2;
        work.images.forEach((image, i) => {
            const button = node('button'); button.type = 'button'; button.dataset.image = i; button.setAttribute('aria-label', image.label);
            const img = node('img'); img.src = image.thumb || image.src; img.alt = ''; button.append(img); thumbnails.append(button);
        });
        const siblings = works.filter(other => other.project && other.project === work.project && other !== work);
        const hasExploration = work.images.length > 1 || siblings.length > 0;
        $('.artwork-room__explore').hidden = !hasExploration;
        $('.artwork-room__layout').classList.toggle('artwork-room__layout--without-explore', !hasExploration);
        $('.artwork-room__related').hidden = !siblings.length;
        $('.artwork-room__related-heading h2').textContent = 'More from ' + work.project;
        $('.artwork-room__related-count').textContent = siblings.length + (siblings.length === 1 ? ' work' : ' works');
        const related = $('.artwork-room__related-list'); related.replaceChildren();
        siblings.forEach(other => {
            const button = node('button', 'artwork-room__related-work'); button.type = 'button'; button.dataset.work = other.index;
            const img = node('img'); img.src = other.thumb; img.alt = ''; img.loading = 'lazy';
            button.append(img, node('span', '', other.title)); related.append(button);
        });
        showImage(0);
        $('.artwork-room__explore').scrollTop = 0;
        thumbnails.scrollLeft = 0;
        reveal($('.artwork-room__information'), 15, 65);
        history.replaceState(null, '', location.pathname + location.search + '#image=' + encodeURIComponent(work.id));
    }
    function open(index, trigger) {
        opener = trigger || works[index].item;
        if (!trigger && !dialog.open) {
            // A shared artwork link also opens over its place in the gallery.
            const sourceItem = works[index].item;
            const positionGallery = () => {
                if (dialog.open) sourceItem.scrollIntoView({ block: 'center', behavior: 'instant' });
            };
            if (document.readyState === 'complete') requestAnimationFrame(positionGallery);
            else window.addEventListener('load', positionGallery, { once: true });
        }
        render(index);
        if (!dialog.open) dialog.showModal();
        syncCatalogue();
        document.body.classList.add('artwork-room-open', 'lg-on');
        $('.artwork-room__scroll').scrollTop = 0;
        $('.artwork-room__close').focus({ preventScroll: true });
    }
    function close() { dialog.close(); }
    dialog.addEventListener('close', () => {
        document.body.classList.remove('artwork-room-open', 'lg-on');
        history.replaceState(null, '', location.pathname + location.search);
        if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    });
    dialog.addEventListener('cancel', event => {
        if (!$('.artwork-room__zoom').hidden) { event.preventDefault(); $('.artwork-room__zoom').hidden = true; $('[data-action="zoom"]').focus(); }
    });
    dialog.addEventListener('click', event => {
        // Native dialog backdrop clicks target the dialog, outside its glass frame.
        if (event.target === dialog) {
            const rect = $('.artwork-room__panel').getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
        }
        const button = event.target.closest('button'); if (!button) return;
        if (button.dataset.catalogueWork !== undefined) { render(Number(button.dataset.catalogueWork)); syncCatalogue(true); return; }
        if (button.dataset.image !== undefined) return showImage(Number(button.dataset.image));
        if (button.dataset.work !== undefined) { render(Number(button.dataset.work)); $('.artwork-room__close').focus({ preventScroll: true }); return; }
        switch (button.dataset.action) {
            case 'catalogue-prev':
            case 'catalogue-next':
                catalogue.scrollBy({ left: catalogue.clientWidth * (button.dataset.action === 'catalogue-next' ? .75 : -.75), behavior: motionEnabled() ? 'smooth' : 'instant' });
                break;
            case 'prev': render(current - 1); break;
            case 'next': render(current + 1); break;
            case 'close': close(); break;
            case 'zoom': $('.artwork-room__zoom').hidden = false; $('[data-action="unzoom"]').focus(); break;
            case 'unzoom': $('.artwork-room__zoom').hidden = true; $('[data-action="zoom"]').focus(); break;
        }
    });
    dialog.addEventListener('keydown', event => {
        if (!event.altKey && !event.ctrlKey && !event.metaKey && event.target.closest('.artwork-room__catalogue-list') && ['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
            const index = event.key === 'Home' ? 0 : event.key === 'End' ? works.length - 1 : current + (event.key === 'ArrowRight' ? 1 : -1);
            render(index); syncCatalogue(true); return;
        }
        if (event.altKey || event.ctrlKey || event.metaKey || !$('.artwork-room__zoom').hidden) return;
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            if (event.target.closest('.artwork-room__thumbnails')) showImage((imageIndex + (event.key === 'ArrowRight' ? 1 : -1) + works[current].images.length) % works[current].images.length, true);
            else render(current + (event.key === 'ArrowRight' ? 1 : -1));
        }
    });
    let touchStart = null;
    $('.artwork-room__stage').addEventListener('touchstart', event => { touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }, { passive: true });
    $('.artwork-room__stage').addEventListener('touchend', event => {
        if (!touchStart) return;
        const dx = event.changedTouches[0].clientX - touchStart.x, dy = event.changedTouches[0].clientY - touchStart.y;
        touchStart = null;
        if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) { event.preventDefault(); render(current + (dx < 0 ? 1 : -1)); }
    });
    works.forEach((work, index) => {
        work.item.setAttribute('role', 'button'); work.item.tabIndex = 0; work.item.setAttribute('aria-label', 'View ' + work.title);
        work.item.addEventListener('click', event => { event.preventDefault(); open(index, work.item); });
        work.item.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(index, work.item); } });
    });
    function openHash() {
        if (!location.hash.startsWith('#image=')) return;
        let id; try { id = decodeURIComponent(location.hash.slice(7)); } catch (_) { return; }
        const index = works.findIndex(work => work.id === id); if (index >= 0) open(index);
    }
    window.addEventListener('hashchange', openHash);
    openHash();
}());
