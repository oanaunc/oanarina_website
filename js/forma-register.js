/* Load the searchable register near its section and grow the DOM only on request. */
(() => {
  'use strict';
  const section = document.querySelector('#roadmap[data-feature-src]');
  if (!section) return;
  const list = section.querySelector('#feature-list');
  const search = section.querySelector('#feature-search');
  const category = section.querySelector('#feature-category');
  const status = section.querySelector('#feature-status');
  const count = section.querySelector('#feature-count');
  const more = document.createElement('button');
  more.type = 'button'; more.className = 'oneMusic-btn'; more.id = 'feature-show-more';
  more.textContent = 'Show more requirements'; more.hidden = true;
  list.after(more);
  const pageSize = 100;
  let data = null, rows = [], shown = 0, request = null;

  function appendPage() {
    const fragment = document.createDocumentFragment();
    const end = Math.min(shown + pageSize, rows.length);
    for (; shown < end; shown++) {
      const feature = rows[shown];
      const row = document.createElement('div'); row.className = 'ui-register-row';
      const id = document.createElement('code'); id.textContent = feature.id;
      const text = document.createElement('div');
      const name = document.createElement('strong'); name.textContent = feature.name;
      const group = document.createElement('small'); group.textContent = feature.category;
      text.append(name, group);
      const badge = document.createElement('span');
      badge.className = 'ui-status ' + feature.status; badge.textContent = feature.status;
      row.append(id, text, badge); fragment.append(row);
    }
    list.append(fragment);
    count.textContent = `Showing ${shown.toLocaleString()} of ${rows.length.toLocaleString()} requirement${rows.length === 1 ? '' : 's'}`;
    more.hidden = shown >= rows.length;
  }
  function render() {
    if (!data) return;
    const query = search.value.toLowerCase();
    rows = data.filter(feature =>
      (category.value === 'All categories' || feature.category === category.value) &&
      (status.value === 'All statuses' || feature.status === status.value) &&
      (feature.name + ' ' + feature.category + ' ' + feature.id).toLowerCase().includes(query));
    shown = 0; list.replaceChildren(); list.scrollTop = 0; appendPage();
  }
  function load() {
    if (request) return request;
    request = fetch(section.dataset.featureSrc).then(response => {
      if (!response.ok) throw new Error('Register unavailable');
      return response.json();
    }).then(features => {
      data = features;
      const options = document.createDocumentFragment();
      for (const value of new Set(data.map(feature => feature.category))) {
        const option = document.createElement('option'); option.textContent = value; options.append(option);
      }
      category.append(options);
      section.querySelector('#feature-stats').textContent = ['implemented', 'partial', 'planned', 'retired']
        .map(value => data.filter(feature => feature.status === value).length.toLocaleString() + ' ' + value).join(' · ');
      render();
    }).catch(() => {
      list.textContent = 'The register could not load. ';
      const fallback = document.createElement('a');
      fallback.href = 'downloads/ui-tool/FEATURE-REGISTER.md';
      fallback.textContent = 'Open the full feature register.';
      list.append(fallback);
      request = null;
    });
    return request;
  }
  search.addEventListener('input', render);
  category.addEventListener('change', render);
  status.addEventListener('change', render);
  more.addEventListener('click', appendPage);
  section.addEventListener('focusin', load, {once: true});
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { observer.disconnect(); load(); }
  }, {rootMargin: '250px'});
  observer.observe(section);
})();
