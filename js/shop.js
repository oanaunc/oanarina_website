/* Searchable project islands. Keep the original cards and store links intact. */
(function () {
    'use strict';
    const board = document.getElementById('shop-projects');
    if (!board) return;
    const { flowCells, outline, topRun } = window.SHOP_LAYOUT;
    const search = document.getElementById('shop-search');
    const clear = document.getElementById('shop-clear-search');
    const reset = document.getElementById('shop-reset');
    const status = document.getElementById('shop-results');
    const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const projects = new Map();
    const colors = [
        ['#f4e8dc', '#c4a98c'], ['#eae5f4', '#b4a2cd'],
        ['#e4eee7', '#9ab9a4'], ['#f4e4e7', '#cba0ac'],
        ['#e2ebf2', '#9eb5c8'], ['#f1ecd9', '#c7b985']
    ];
    const records = Array.from(board.querySelectorAll('[data-artwork-id]')).map(card => {
        const title = card.querySelector('.shop-artwork-title');
        const image = card.querySelector('.single-album > img');
        const medium = card.classList.contains('b') ? 'drawing' : 'painting';
        const project = card.dataset.project;
        if (!image.alt) image.alt = card.dataset.searchTitle || title.textContent;
        image.loading = 'lazy'; image.decoding = 'async'; image.width = 300; image.height = 300;
        title.title = card.dataset.searchTitle || title.textContent;
        const record = { card, medium, text: normalize(project + ' ' + title.textContent + ' ' + card.dataset.searchTitle) };
        const projectKey = medium + ':' + project;
        if (!projects.has(projectKey)) projects.set(projectKey, { name: project, medium, works: [] });
        projects.get(projectKey).works.push(record);
        return record;
    });
    const make = (tag, className, text) => {
        const element = document.createElement(tag);
        element.className = className;
        if (text) element.textContent = text;
        return element;
    };
    const islands = Array.from(projects.values(), ({ name, medium, works }, index) => {
        const section = make('section', 'shop-project');
        section.setAttribute('aria-labelledby', 'shop-project-' + index);
        section.dataset.project = name;
        section.dataset.medium = medium;
        section.style.setProperty('--project-fill', colors[index % colors.length][0]);
        section.style.setProperty('--project-line', colors[index % colors.length][1]);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('shop-project__outline'); svg.setAttribute('aria-hidden', 'true');
        const path = document.createElementNS(svg.namespaceURI, 'path'); svg.append(path);
        const heading = make('header', 'shop-project__heading');
        const title = make('h2', '', name); title.id = 'shop-project-' + index;
        const count = make('span', 'shop-project__count');
        const identity = make('div', 'shop-project__identity');
        identity.append(title, make('span', 'shop-project__medium', medium === 'drawing' ? 'Drawings' : 'Paintings'));
        heading.append(identity, count); section.append(svg, heading);
        works.forEach(work => section.append(work.card));
        return { section, heading, count, path, svg, works };
    });
    board.replaceChildren(...islands.map(island => island.section));
    let medium = '', frame = 0, hasLayout = false;
    function layout() {
        frame = 0;
        const width = board.clientWidth;
        if (!width) return;
        const columns = Math.max(1, Math.floor(width / 174));
        const cellWidth = width / columns;
        const words = normalize(search.value).split(' ').filter(Boolean);
        const animate = hasLayout && !matchMedia('(prefers-reduced-motion: reduce)').matches && !document.documentElement.classList.contains('motion-off');
        const previous = new Map();
        if (animate) records.forEach(work => {
            const rect = work.card.getBoundingClientRect();
            if (!work.card.hidden && rect.bottom > 0 && rect.top < innerHeight) previous.set(work.card, rect);
            work.card.getAnimations().forEach(animation => animation.cancel());
        });
        const matches = islands.map(island => {
            const visible = island.works.filter(work => (!medium || medium === work.medium) && words.every(word => work.text.includes(word)));
            island.works.forEach(work => {
                work.card.hidden = !visible.includes(work);
                work.card.style.width = cellWidth - 36 + 'px';
            });
            island.section.hidden = !visible.length;
            return visible;
        });
        // Measure after the responsive card widths and search visibility are set.
        // This includes wrapped titles, store buttons, and the card's padding.
        const cardHeight = Math.max(0, ...records.filter(work => !work.card.hidden).map(work => work.card.offsetHeight));
        const cellHeight = cardHeight + 84;
        const totalMatches = matches.reduce((sum, works) => sum + works.length, 0);
        const flow = flowCells(totalMatches, columns);
        let cursor = 0;
        let total = 0, groupCount = 0, bottom = 0;
        islands.forEach((island, index) => {
            const visible = matches[index];
            if (!visible.length) return;
            total += visible.length; groupCount++;
            const globalCells = flow.slice(cursor, cursor + visible.length); cursor += visible.length;
            const x = Math.min(...globalCells.map(cell => cell[0])), y = Math.min(...globalCells.map(cell => cell[1]));
            const cells = globalCells.map(([cx, cy]) => [cx - x, cy - y]);
            const w = (Math.max(...cells.map(cell => cell[0])) + 1) * cellWidth;
            const h = (Math.max(...cells.map(cell => cell[1])) + 1) * cellHeight;
            Object.assign(island.section.style, { left: x * cellWidth + 'px', top: y * cellHeight + 'px', width: w + 'px', height: h + 'px' });
            island.svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
            island.path.setAttribute('d', outline(cells, cellWidth, cellHeight));
            island.path.setAttribute('fill-rule', 'evenodd');
            const headingRun = topRun(cells);
            island.heading.style.left = headingRun.column * cellWidth + 20 + 'px';
            island.heading.style.width = headingRun.length * cellWidth - 40 + 'px';
            island.count.textContent = visible.length + (visible.length === 1 ? ' work' : ' works');
            visible.forEach((work, i) => {
                Object.assign(work.card.style, { left: cells[i][0] * cellWidth + 18 + 'px', top: cells[i][1] * cellHeight + 64 + 'px', width: cellWidth - 36 + 'px' });
            });
            bottom = Math.max(bottom, y * cellHeight + h);
        });
        board.style.height = bottom + 'px';
        hasLayout = true;
        if (animate) previous.forEach((old, card) => {
            if (card.hidden) return;
            const rect = card.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > innerHeight) return;
            const dx = old.left - rect.left, dy = old.top - rect.top;
            if (Math.abs(dx) + Math.abs(dy) > 1) card.animate([{ translate: `${dx}px ${dy}px` }, { translate: '0 0' }], { duration: 350, easing: 'cubic-bezier(.2,.7,.2,1)' });
        });
        status.textContent = `${total} ${total === 1 ? 'work' : 'works'} · ${groupCount} ${groupCount === 1 ? 'project' : 'projects'}`;
        document.querySelector('.shop-empty').hidden = total > 0;
        clear.hidden = !search.value;
        reset.hidden = !search.value && !medium;
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(layout); };
    search.addEventListener('input', schedule);
    clear.addEventListener('click', () => { search.value = ''; search.focus(); schedule(); });
    document.querySelectorAll('.shop-medium-filters [data-medium]').forEach(button => button.addEventListener('click', () => {
        medium = button.dataset.medium;
        document.querySelectorAll('.shop-medium-filters [data-medium]').forEach(other => other.setAttribute('aria-pressed', String(other.dataset.medium === medium)));
        schedule();
    }));
    reset.addEventListener('click', () => {
        medium = ''; search.value = '';
        document.querySelectorAll('.shop-medium-filters [data-medium]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.medium === '')));
        schedule();
    });
    new ResizeObserver(schedule).observe(board);
    layout();
}());
