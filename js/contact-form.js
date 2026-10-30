/* A third-party form must not block the home page's parser or navigation scripts. */
(() => {
  'use strict';
  const container = document.querySelector('[data-contact-form-src]');
  if (!container) return;
  let requested = false, near = false;
  function load() {
    if (requested || !near || document.hidden) return;
    requested = true;
    container.setAttribute('aria-busy', 'true');
    const script = document.createElement('script');
    script.async = true; script.src = container.dataset.contactFormSrc;
    const done = () => container.removeAttribute('aria-busy');
    script.addEventListener('load', done, {once: true});
    script.addEventListener('error', done, {once: true});
    container.append(script);
    observer.disconnect();
  }
  const observer = new IntersectionObserver(entries => {
    near = entries[0].isIntersecting; load();
  }, {rootMargin: '200px'});
  observer.observe(container);
  document.addEventListener('visibilitychange', load);
})();
