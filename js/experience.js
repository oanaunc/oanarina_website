/* Progressive enhancement: native scrolling scrubs Higgsfield films over original headers. */
(() => {
  'use strict';
  const name = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  const config = window.OANA_MOTION?.[name];
  if (!config) return;
  const stage = document.querySelector(name === 'index' ? '.hero-area' : '.music-hero, header ~ section, .header-area ~ section');
  if (!stage) return;
  const root = document.documentElement;
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  let disabled = mq.matches;
  try { disabled ||= localStorage.getItem('oana-motion') === 'off'; } catch (_) {}
  const saveData = Boolean(navigator.connection?.saveData);
  let near = false, target = 0, scheduled = false, carouselStopped = false;
  const artist = name === 'index' ? document.querySelector('.featured-artist-area') : null;
  const portrait = artist?.querySelector('.featured-artist-thumb');
  let portraitX = 0, portraitY = 0;
  if (portrait) {
    artist.classList.add('artist-motion');
    const orbit = document.createElement('span');
    orbit.className = 'portrait-orbit';
    orbit.setAttribute('aria-hidden', 'true');
    portrait.append(orbit);
    portrait.addEventListener('pointermove', event => {
      if (disabled || event.pointerType !== 'mouse') return;
      const rect = portrait.getBoundingClientRect();
      portraitX = (event.clientX - rect.left) / rect.width - .5;
      portraitY = (event.clientY - rect.top) / rect.height - .5;
      schedule();
    });
    portrait.addEventListener('pointerleave', () => { portraitX = 0; portraitY = 0; schedule(); });
  }
  const wrapper = document.createElement('div'); wrapper.className = 'motion-scroll';
  stage.before(wrapper); wrapper.append(stage); stage.classList.add('motion-stage');
  const after = document.createElement('span'); after.id = 'motion-content'; wrapper.after(after);
  const toolbar = document.createElement('div'); toolbar.className = 'motion-toolbar'; toolbar.setAttribute('aria-label', 'Animation controls');
  const toggle = document.createElement('button'); toggle.type = 'button';
  const skip = document.createElement('a'); skip.href = '#motion-content'; skip.textContent = 'Skip animation ↓';
  toolbar.append(toggle, skip); document.body.append(toolbar);
  const timeline = document.createElement('div'); timeline.className = 'motion-timeline'; timeline.setAttribute('aria-hidden', 'true'); document.body.append(timeline);
  const cue = document.createElement('div'); cue.className = 'motion-scroll-cue'; cue.setAttribute('aria-hidden','true'); cue.innerHTML = 'SCROLL TO BRING THIS IMAGE TO LIFE <span>↓</span>'; stage.append(cue);
  const videos = [];
  const backgrounds = name === 'index' ? [...stage.querySelectorAll('.slide-img')] : [stage];
  backgrounds.forEach((background, index) => {
    const video = document.createElement('video'); video.className = 'motion-video'; video.muted = true; video.playsInline = true; video.preload = 'none';
    video.setAttribute('muted', ''); video.setAttribute('playsinline',''); video.setAttribute('aria-hidden','true'); video.tabIndex = -1;
    video.dataset.src = name === 'index' && background.style.backgroundImage.includes('bg-2.jpg') ? config.secondSrc : config.src;
    background.prepend(video);
    const item = { video, ready: false, failed: false, time: 0 };
    video.addEventListener('loadeddata', () => { item.ready = true; schedule(); });
    video.addEventListener('seeked', () => seek(item));
    video.addEventListener('error', () => {
      item.failed = true; video.style.opacity = '0';
      if (videos.every(v => v.failed)) { cue.textContent = 'EXPLORE THE COLLECTION BELOW ↓'; measure(); }
    });
    videos.push(item);
  });
  function measure() {
    const height = stage.getBoundingClientRect().height;
    const extended = !disabled && !saveData && !videos.every(v => v.failed);
    wrapper.style.height = `${height + (extended ? innerHeight * 1.15 : 0)}px`;
    stage.style.top = `${Math.min(0, innerHeight - height)}px`;
    schedule();
  }
  function load() {
    if (disabled || saveData || !near) return;
    videos.forEach(({video,failed}) => {
      if (name === 'index' && !video.closest('.owl-item')?.classList.contains('active')) return;
      if (!failed && !video.getAttribute('src')) { video.src = video.dataset.src; video.load(); }
    });
  }
  function seek(item) {
    const v = item.video;
    if (name === 'index' && !v.closest('.owl-item')?.classList.contains('active')) return;
    if (disabled || !near || !item.ready || item.failed || v.seeking || !Number.isFinite(v.duration)) return;
    const next = Math.max(0, Math.min(v.duration - .04, target * v.duration));
    if (Math.abs(v.currentTime - next) > .035) { try { v.currentTime = next; } catch (_) {} }
  }
  function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
  function update() {
    scheduled = false;
    if (portrait) {
      const bounds = artist.getBoundingClientRect();
      if (disabled || (bounds.bottom > 0 && bounds.top < innerHeight)) {
        const progress = disabled ? .5 : Math.max(0, Math.min(1, (innerHeight - bounds.top) / (innerHeight + bounds.height)));
        artist.style.setProperty('--portrait-lift', `${disabled ? 0 : (progress - .5) * -48}px`);
        artist.style.setProperty('--portrait-scale', String(disabled ? 1 : .97 + progress * .06));
        artist.style.setProperty('--portrait-orbit', `${progress * 150}deg`);
        artist.style.setProperty('--portrait-tilt-x', `${disabled ? 0 : -portraitY * 8}deg`);
        artist.style.setProperty('--portrait-tilt-y', `${disabled ? 0 : portraitX * 8}deg`);
        artist.style.setProperty('--artist-copy-lift', `${disabled ? 0 : (progress - .5) * -18}px`);
      }
    }
    const rect = wrapper.getBoundingClientRect();
    const stickyOffset = Math.max(0, stage.offsetHeight - innerHeight);
    const distance = Math.max(1, wrapper.offsetHeight - stage.offsetHeight);
    target = Math.max(0, Math.min(1, (-rect.top - stickyOffset) / distance));
    stage.classList.toggle('motion-scrubbing', !disabled && target > 0 && target < 1);
    timeline.style.transform = `scaleX(${Math.max(0,Math.min(1,scrollY / Math.max(1,root.scrollHeight-innerHeight)))})`;
    videos.forEach(item => {
      seek(item);
      item.video.style.opacity = !disabled && item.ready && !item.failed ? String(Math.min(1, target * 10)) : '0';
    });
    cue.style.opacity = target > .8 || disabled ? '0' : '1';
    skip.hidden = rect.bottom < 0 || disabled || saveData;
    if (name === 'index' && window.jQuery?.fn.owlCarousel) {
      const stop = disabled || (near && target > 0 && target < 1);
      if (stop !== carouselStopped) {
        window.jQuery('.hero-slides').trigger(stop ? 'stop.owl.autoplay' : 'play.owl.autoplay');
        carouselStopped = stop;
      }
    }
  }
  const observer = new IntersectionObserver(entries => {
    near = entries[0].isIntersecting;
    if (near) load();
    schedule();
  }, {rootMargin:'200px'}); observer.observe(wrapper);
  function applyMotion() {
    root.classList.toggle('motion-off', disabled);
    toggle.textContent = disabled ? 'Motion off' : 'Motion on'; toggle.setAttribute('aria-pressed', String(!disabled));
    toggle.setAttribute('aria-label', disabled ? 'Enable scroll animation' : 'Disable scroll animation');
    measure(); load();
  }
  toggle.addEventListener('click', () => {
    // Keep the viewer at the same content position when removing the extra scroll space.
    const previousBottom = wrapper.getBoundingClientRect().bottom;
    disabled = !disabled;
    try { localStorage.setItem('oana-motion', disabled ? 'off' : 'on'); } catch (_) {}
    applyMotion();
    if (previousBottom < 0) window.scrollBy(0, wrapper.getBoundingClientRect().bottom - previousBottom);
  });
  mq.addEventListener('change', e => { disabled = e.matches; applyMotion(); });
  addEventListener('scroll', schedule, {passive:true}); addEventListener('resize',measure); addEventListener('load',measure);
  const resizeObserver = new ResizeObserver(measure); resizeObserver.observe(stage);
  if (name === 'index' && window.jQuery) {
    window.jQuery('.hero-slides').on('translated.owl.carousel', () => { load(); schedule(); });
  }
  // Keep the original mobile menu usable from a keyboard as well as a tap.
  const navToggle = document.querySelector('.classy-navbar-toggler');
  if (navToggle) {
    navToggle.tabIndex = 0;
    navToggle.setAttribute('role', 'button');
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    navToggle.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navToggle.click(); }
    });
  }
  document.querySelectorAll('.album-thumb img, .single-album img, .track-card img').forEach(img => img.classList.add('motion-image-surface'));
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!disabled) entry.target.classList.add('motion-reveal');
      reveal.unobserve(entry.target);
    }
  }), {threshold:.1});
  document.querySelectorAll('.single-album-area, .single-service-area, .track-card, .artist-head, .section-heading').forEach(el => {
    if (!stage.contains(el)) reveal.observe(el);
  });
  applyMotion();
})();
