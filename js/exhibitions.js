/* Event descriptions and coverage come from the exhibition cards. */
(function () {
    'use strict';

    const galleries = {
        "romanian-graphics-2026": [
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5834.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_6093.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5683.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5684.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5685.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5686.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5687.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5688.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5689.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5690.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5765.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5918.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_5949.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2026/IMG_6094.jpg"},
        ],
        "pepsi-space-2023": [
            {"src": "images/exhibitions/web/pepsi-space-2023/billboard-with-artist.webp", "thumb": "images/exhibitions/web/pepsi-space-2023/billboard-with-artist-thumb.webp", "label": "Oana Rinaldi with her clock-and-octopus artwork displayed on a Pepsi Space billboard."},
            {"src": "images/exhibitions/web/pepsi-space-2023/clock-and-octopus.webp", "thumb": "images/exhibitions/web/pepsi-space-2023/clock-and-octopus-thumb.webp", "label": "Clock-and-octopus artwork in the Pepsi Space campaign design."},
        ],
        "fe-mail-art": [
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5065.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5036.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5037.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5038.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5039.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5040.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5041.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5042.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5043.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5044.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5087.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5232.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5305.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5306.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5307.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5309.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5312.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5313.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5315.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5316.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5317.jpg"},
            {"src": "images/exhibitions/web/fe-mail-art/IMG_5318.jpg"},
        ],
        "spring-salon-2026": [
            {"src": "images/exhibitions/web/spring-salon-2026/01.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/02.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/03.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/04.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/05.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/06.jpg"},
            {"src": "images/exhibitions/web/spring-salon-2026/07.jpg"},
        ],
        "game-mechanics-live": [
            {"src": "images/exhibitions/web/game-mechanics-live/02.jpg"},
            {"src": "images/exhibitions/web/game-mechanics-live/01.jpg"},
            {"src": "images/exhibitions/web/game-mechanics-live/03.jpg"},
        ],
        "openart-2026": [
            {"src": "images/exhibitions/web/openart-2026/01.jpg"},
            {"src": "images/exhibitions/web/openart-2026/02.jpg"},
        ],
        "winter-salon": [
            {"src": "images/exhibitions/web/winter-salon/13.jpg"},
            {"src": "images/exhibitions/web/winter-salon/01.jpg"},
            {"src": "images/exhibitions/web/winter-salon/02.jpg"},
            {"src": "images/exhibitions/web/winter-salon/03.jpg"},
            {"src": "images/exhibitions/web/winter-salon/04.jpg"},
            {"src": "images/exhibitions/web/winter-salon/05.jpg"},
            {"src": "images/exhibitions/web/winter-salon/06.jpg"},
            {"src": "images/exhibitions/web/winter-salon/07.jpg"},
            {"src": "images/exhibitions/web/winter-salon/08.jpg"},
            {"src": "images/exhibitions/web/winter-salon/09.jpg"},
            {"src": "images/exhibitions/web/winter-salon/10.jpg"},
            {"src": "images/exhibitions/web/winter-salon/11.jpg"},
            {"src": "images/exhibitions/web/winter-salon/12.jpg"},
            {"src": "images/exhibitions/web/winter-salon/14.jpg"},
            {"src": "images/exhibitions/web/winter-salon/15.jpg"},
            {"src": "images/exhibitions/web/winter-salon/16.jpg"},
            {"src": "images/exhibitions/web/winter-salon/17.jpg"},
        ],
        "doctoral-research-2025": [
            {"src": "images/exhibitions/web/doctoral-research-2025/13.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/01.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/02.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/03.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/04.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/05.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/06.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/07.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/08.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/09.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/10.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/11.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/12.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/14.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/15.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/16.jpg"},
            {"src": "images/exhibitions/web/doctoral-research-2025/17.jpg"},
        ],
        "romanian-graphics-2025": [
            {"src": "images/exhibitions/web/romanian-graphics-2025/02.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/01.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/03.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/04.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/05.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/06.jpg"},
            {"src": "images/exhibitions/web/romanian-graphics-2025/07.jpg"},
        ],
        "emotions-of-the-soul": [
            {"src": "images/exhibitions/web/emotions-of-the-soul/10.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/01.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/02.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/03.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/04.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/05.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/06.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/07.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/08.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/09.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/11.jpg"},
            {"src": "images/exhibitions/web/emotions-of-the-soul/12.jpg"},
        ],
    };

    const triggers = document.querySelectorAll('[data-event-gallery]');
    const dialog = document.createElement('dialog');
    if (!triggers.length || typeof dialog.showModal !== 'function') return;

    dialog.className = 'artwork-room exhibition-room';
    dialog.setAttribute('aria-labelledby', 'exhibition-room-title');
    dialog.innerHTML = `
        <div class="artwork-room__panel">
            <header class="artwork-room__header">
                <div class="artwork-room__identity">
                    <span>Oana Rinaldi</span>
                    <button type="button" class="artwork-room__category" data-action="close">← Exhibitions</button>
                </div>
                <nav class="artwork-room__navigation" aria-label="Event photo navigation">
                    <button type="button" data-photo-step="-1" aria-label="Previous photo">← <span>Previous</span></button>
                    <span class="artwork-room__position" aria-live="polite"></span>
                    <button type="button" data-photo-step="1" aria-label="Next photo"><span>Next</span> →</button>
                </nav>
                <button type="button" class="artwork-room__close" data-action="close" aria-label="Close event viewer">×</button>
            </header>
            <div class="artwork-room__scroll">
                <div class="artwork-room__layout">
                    <section class="artwork-room__visual" aria-label="Event photo">
                        <button type="button" class="artwork-room__stage" data-action="zoom" aria-label="Enlarge event photo">
                            <img class="artwork-room__image" alt="">
                            <span class="artwork-room__enlarge" aria-hidden="true">⤢</span>
                        </button>
                        <p class="artwork-room__image-meta exhibition-room__caption" hidden></p>
                    </section>
                    <section class="artwork-room__explore artwork-room__views" aria-labelledby="exhibition-photos-title">
                        <h2 id="exhibition-photos-title">Event photos</h2>
                        <div class="artwork-room__thumbnails" role="group" aria-label="Event photo thumbnails"></div>
                    </section>
                    <article class="artwork-room__information" aria-labelledby="exhibition-room-title" tabindex="0">
                        <h1 id="exhibition-room-title"></h1>
                        <p class="exhibition-room__metadata"></p>
                        <section class="exhibition-room__description" aria-label="About the event"></section>
                        <section class="exhibition-room__coverage" aria-labelledby="exhibition-coverage-title">
                            <h2 id="exhibition-coverage-title">Articles &amp; coverage</h2>
                            <div class="exhibition-room__article-links"></div>
                        </section>
                        <section class="exhibition-room__videos" aria-labelledby="exhibition-videos-title">
                            <h2 id="exhibition-videos-title">Videos</h2>
                            <div class="exhibition-room__video-links"></div>
                        </section>
                    </article>
                </div>
            </div>
            <div class="artwork-room__zoom" hidden>
                <button type="button" data-action="unzoom">← Back to event</button>
                <img alt="">
            </div>
        </div>`;
    document.body.append(dialog);

    const $ = selector => dialog.querySelector(selector);
    const stage = $('.artwork-room__stage');
    const image = $('.artwork-room__image');
    const thumbnails = $('.artwork-room__thumbnails');
    const caption = $('.exhibition-room__caption');
    const zoom = $('.artwork-room__zoom');
    const zoomImage = zoom.querySelector('img');
    let opener;
    let photos = [];
    let title = '';
    let coverAlt = '';
    let current = 0;

    function youtubeId(url) {
        if (url.hostname === 'youtu.be') return url.pathname.split('/')[1];
        if (url.hostname !== 'www.youtube.com' && url.hostname !== 'youtube.com') return null;
        return url.pathname.startsWith('/shorts/') ? url.pathname.split('/')[2] : url.searchParams.get('v');
    }

    function renderResources(card, cover) {
        const articles = [];
        const videos = [];
        for (const source of card.querySelectorAll('.exhibition-resource-links a')) {
            const id = youtubeId(new URL(source.href));
            const link = source.cloneNode(true);
            if (!id) {
                link.className = 'artwork-room__purchase artwork-room__purchase--secondary';
                link.querySelector('[aria-hidden="true"]')?.classList.add('artwork-room__external');
                articles.push(link);
                continue;
            }

            link.className = 'exhibition-room__video';
            const preview = document.createElement('span');
            preview.className = 'exhibition-room__video-preview';
            const thumb = document.createElement('img');
            thumb.alt = '';
            thumb.decoding = 'async';
            thumb.loading = 'lazy';
            thumb.referrerPolicy = 'no-referrer';
            thumb.addEventListener('error', () => { thumb.src = cover; }, { once: true });
            thumb.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/mqdefault.jpg';
            const play = document.createElement('span');
            play.className = 'exhibition-room__play';
            play.setAttribute('aria-hidden', 'true');
            play.textContent = '▶';
            preview.append(thumb, play);
            const label = document.createElement('span');
            label.className = 'exhibition-room__video-label';
            label.textContent = source.childNodes[0].textContent.trim();
            link.replaceChildren(preview, label);
            videos.push(link);
        }
        $('.exhibition-room__article-links').replaceChildren(...articles);
        $('.exhibition-room__video-links').replaceChildren(...videos);
        $('.exhibition-room__coverage').hidden = !articles.length;
        $('.exhibition-room__videos').hidden = !videos.length;
    }

    function showPhoto(index, focus = false) {
        current = (index + photos.length) % photos.length;
        const photo = photos[current];
        image.src = photo.src;
        image.alt = photo.label || (current === 0 && coverAlt) || title + ' · photo ' + (current + 1);
        caption.textContent = photo.label || '';
        caption.hidden = !photo.label;
        $('.artwork-room__position').textContent = (current + 1) + ' / ' + photos.length;
        thumbnails.querySelector('[aria-pressed="true"]')?.setAttribute('aria-pressed', 'false');
        const selected = thumbnails.children[current];
        if (!selected) return;
        selected.setAttribute('aria-pressed', 'true');
        if (focus) selected.focus({ preventScroll: true });
        if (!dialog.open) return;
        const rail = thumbnails.getBoundingClientRect();
        const item = selected.getBoundingClientRect();
        if (item.top < rail.top || item.bottom > rail.bottom) {
            thumbnails.scrollTop += item.top < rail.top ? item.top - rail.top - 4 : item.bottom - rail.bottom + 4;
        }
        if (item.left < rail.left || item.right > rail.right) {
            thumbnails.scrollLeft += item.left < rail.left ? item.left - rail.left - 4 : item.right - rail.right + 4;
        }
    }

    function open(trigger) {
        opener = trigger;
        const card = trigger.closest('.exhibition-card');
        title = card.querySelector('h4').textContent.trim();
        coverAlt = card.querySelector('.event-thumbnail img').alt;
        photos = galleries[trigger.dataset.eventGallery] || [{ src: trigger.href }];
        const multiple = photos.length > 1;
        $('#exhibition-room-title').textContent = title;
        $('.exhibition-room__metadata').textContent = Array.from(card.querySelectorAll('.event-meta-data span'), span => span.textContent.trim()).join(' · ');
        $('.exhibition-room__description').replaceChildren(...Array.from(card.querySelectorAll('.exhibition-details > p'), paragraph => paragraph.cloneNode(true)));
        renderResources(card, photos[0].src);

        $('.artwork-room__explore').hidden = !multiple;
        $('.artwork-room__navigation').hidden = !multiple;
        $('.artwork-room__layout').classList.toggle('artwork-room__layout--without-explore', !multiple);
        thumbnails.replaceChildren(...(multiple ? photos.map((photo, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.photo = index;
            button.setAttribute('aria-label', photo.label || 'View photo ' + (index + 1) + ' of ' + photos.length);
            button.setAttribute('aria-pressed', 'false');
            const thumb = document.createElement('img');
            thumb.alt = '';
            thumb.loading = 'lazy';
            thumb.decoding = 'async';
            thumb.src = photo.thumb || photo.src;
            button.append(thumb);
            return button;
        }) : []));
        showPhoto(0);
        document.body.classList.add('artwork-room-open');
        dialog.showModal();
        $('.artwork-room__scroll').scrollTop = 0;
        $('.artwork-room__information').scrollTop = 0;
        $('.artwork-room__close').focus({ preventScroll: true });
    }

    function setZoom(active) {
        if (active) {
            zoomImage.src = image.src;
            zoomImage.alt = image.alt;
        }
        zoom.hidden = !active;
        $('.artwork-room__header').inert = active;
        $('.artwork-room__scroll').inert = active;
        (active ? $('[data-action="unzoom"]') : stage).focus({ preventScroll: true });
    }

    for (const trigger of triggers) {
        trigger.addEventListener('click', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            open(trigger);
        });
    }
    dialog.addEventListener('close', () => {
        document.body.classList.remove('artwork-room-open');
        if (!zoom.hidden) setZoom(false);
        opener.focus({ preventScroll: true });
    });
    dialog.addEventListener('cancel', event => {
        if (zoom.hidden) return;
        event.preventDefault();
        setZoom(false);
    });
    dialog.addEventListener('click', event => {
        if (event.target === dialog) {
            dialog.close();
            return;
        }
        const button = event.target.closest('button');
        if (!button) return;
        if (button.dataset.photo !== undefined) showPhoto(Number(button.dataset.photo));
        else if (button.dataset.photoStep) showPhoto(current + Number(button.dataset.photoStep));
        else if (button.dataset.action === 'close') dialog.close();
        else if (button.dataset.action === 'zoom') setZoom(true);
        else if (button.dataset.action === 'unzoom') setZoom(false);
    });
    dialog.addEventListener('keydown', event => {
        if (!zoom.hidden || photos.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
        const inThumbnails = thumbnails.contains(event.target);
        const keys = inThumbnails ? ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
        showPhoto(current + direction, inThumbnails);
    });

    let touchStart = null;
    stage.addEventListener('touchstart', event => {
        touchStart = event.touches.length === 1 ? event.touches[0] : null;
    }, { passive: true });
    stage.addEventListener('touchend', event => {
        const start = touchStart;
        touchStart = null;
        if (!start || photos.length < 2) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.clientX;
        const dy = touch.clientY - start.clientY;
        if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            event.preventDefault();
            showPhoto(current + (dx < 0 ? 1 : -1));
        }
    });
}());
