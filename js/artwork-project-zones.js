/* Pack gallery works into project islands using the same grid as the Shop. */
(function () {
    'use strict';

    const svgNS = 'http://www.w3.org/2000/svg';
    const colors = [
        ['#f8eee4', '#cfb69e'], ['#f1ebf8', '#c4b2d6'], ['#eaf3ec', '#b1cbb9'],
        ['#f8ebee', '#d9b5c0'], ['#eaf1f8', '#b4c9da'], ['#f6f0dd', '#d3c59b']
    ];
    const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

    window.initArtworkProjectZones = function (gallery, works) {
        const controls = document.getElementById('artwork-controls');
        if (!window.SHOP_LAYOUT || !controls) return;
        const { flowCells, outline, topRun } = window.SHOP_LAYOUT;
        const search = controls.querySelector('#artwork-search');
        const clear = controls.querySelector('#artwork-clear-search');
        const reset = controls.querySelector('#artwork-reset');
        const status = controls.querySelector('#artwork-results');
        const filters = Array.from(controls.querySelectorAll('button[data-filter]'));

        const byProject = new Map();
        for (const { item, title, project } of works) {
            const name = project?.trim() || 'Independent works';
            if (!byProject.has(name)) byProject.set(name, []);
            byProject.get(name).push({ item, searchText: normalize(name + ' ' + title) });
        }
        const projects = Array.from(byProject, ([name, cards], index) => {
            const section = document.createElement('section');
            section.className = 'shop-project artwork-project-island';
            const id = 'artwork-project-title-' + index;
            section.setAttribute('aria-labelledby', id);
            const [fill, stroke] = colors[index % colors.length];
            section.style.setProperty('--project-fill', fill);
            section.style.setProperty('--project-line', stroke);

            const svg = document.createElementNS(svgNS, 'svg');
            svg.classList.add('shop-project__outline');
            svg.setAttribute('aria-hidden', 'true');
            const path = document.createElementNS(svgNS, 'path');
            path.setAttribute('fill-rule', 'evenodd');
            svg.append(path);

            const heading = document.createElement('header');
            heading.className = 'shop-project__heading';
            heading.id = id;
            const title = document.createElement('h2');
            title.textContent = name;
            const count = document.createElement('span');
            count.className = 'shop-project__count';
            heading.append(title, count);
            section.append(svg, heading, ...cards.map(({ item }) => item));
            return { cards, section, svg, path, heading, count };
        });

        gallery.classList.add('artwork-project-board');
        gallery.replaceChildren(...projects.map(project => project.section));
        controls.hidden = false;

        let filter = '';
        let frame = 0;
        let lastWidth = 0;
        function layout() {
            frame = 0;
            const width = gallery.clientWidth;
            if (!width) return;
            lastWidth = width;
            const columns = Number(getComputedStyle(gallery).getPropertyValue('--project-columns'));
            const cellWidth = width / columns;
            gallery.style.setProperty('--project-cell-width', cellWidth + 'px');
            const words = normalize(search.value).split(' ').filter(Boolean);
            let total = 0;
            let projectCount = 0;
            const matches = projects.map(project => {
                const visible = project.cards.filter(({ item, searchText }) => {
                    const match = (!filter || item.matches(filter)) && words.every(word => searchText.includes(word));
                    item.hidden = !match;
                    return match;
                });
                total += visible.length;
                if (visible.length) projectCount++;
                project.section.hidden = !visible.length;
                return visible;
            });

            let boardHeight = 0;
            if (total) {
                // The fixed thumbnail ratio reserves the same space before and after lazy loading.
                const first = matches.find(cards => cards.length)[0].item;
                const cellHeight = first.getBoundingClientRect().height;
                const inset = parseFloat(getComputedStyle(first).paddingLeft);
                const flow = flowCells(total, columns);
                let cursor = 0;
                projects.forEach((project, index) => {
                    const cards = matches[index];
                    if (!cards.length) return;
                    const globalCells = flow.slice(cursor, cursor + cards.length);
                    cursor += cards.length;
                    const left = Math.min(...globalCells.map(cell => cell[0]));
                    const top = Math.min(...globalCells.map(cell => cell[1]));
                    const cells = globalCells.map(([x, y]) => [x - left, y - top]);
                    const zoneWidth = (Math.max(...cells.map(cell => cell[0])) + 1) * cellWidth;
                    const zoneHeight = (Math.max(...cells.map(cell => cell[1])) + 1) * cellHeight;
                    Object.assign(project.section.style, {
                        left: left * cellWidth + 'px', top: top * cellHeight + 'px',
                        width: zoneWidth + 'px', height: zoneHeight + 'px'
                    });
                    project.svg.setAttribute('viewBox', `0 0 ${zoneWidth} ${zoneHeight}`);
                    project.path.setAttribute('d', outline(cells, cellWidth, cellHeight));
                    const run = topRun(cells);
                    project.heading.style.left = run.column * cellWidth + inset + 'px';
                    project.heading.style.width = run.length * cellWidth - 2 * inset + 'px';
                    project.count.textContent = cards.length + (cards.length === 1 ? ' work' : ' works');
                    cards.forEach(({ item }, i) => {
                        item.style.left = cells[i][0] * cellWidth + 'px';
                        item.style.top = cells[i][1] * cellHeight + 'px';
                    });
                    boardHeight = Math.max(boardHeight, top * cellHeight + zoneHeight);
                });
            }
            gallery.style.height = boardHeight + 'px';
            status.textContent = total
                ? total + (total === 1 ? ' work' : ' works') + ' · ' + projectCount + (projectCount === 1 ? ' project' : ' projects')
                : 'No works match your search and filters.';
            clear.hidden = !search.value;
            reset.hidden = !search.value && !filter;
        }

        function schedule() {
            if (!frame) frame = requestAnimationFrame(layout);
        }
        function select(button) {
            filter = button.dataset.filter;
            for (const other of filters) other.setAttribute('aria-pressed', String(other === button));
            schedule();
        }

        search.addEventListener('input', schedule);
        clear.addEventListener('click', () => {
            search.value = '';
            search.focus();
            schedule();
        });
        for (const button of filters) button.addEventListener('click', () => select(button));
        reset.addEventListener('click', () => {
            search.value = '';
            search.focus();
            select(filters[0]);
        });
        new ResizeObserver(() => {
            if (gallery.clientWidth !== lastWidth) schedule();
        }).observe(gallery);
        layout();
    };
}());
