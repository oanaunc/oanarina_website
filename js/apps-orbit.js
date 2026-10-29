/* Small, real DOM cards orbit in depth; scrolling adds angular momentum. */
(() => {
  'use strict';
  const section = document.querySelector('.apps-orbit');
  if (!section) return;
  const stage = section.querySelector('.apps-orbit-stage');
  const heading = section.querySelector('.apps-orbit-heading');
  const eyebrow = heading.querySelector('.apps-orbit-eyebrow');
  const intro = section.querySelector('.apps-orbit-intro');
  const discover = section.querySelector('.apps-orbit-discover');
  const shade = section.querySelector('.apps-orbit-shade');
  const progressBar = section.querySelector('.apps-orbit-progress > span');
  const scrollCue = section.querySelector('.apps-orbit-scroll');
  const cards = [...section.querySelectorAll('.apps-orbit-card')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smooth = (start, end, value) => { const t = clamp((value - start) / (end - start)); return t * t * (3 - 2 * t); };
  let enabled = false, inView = false, frame = null, previousTime = 0;
  let width = 1, height = 1, progress = 0, phase = 0, momentum = 0;
  let lastScroll = scrollY, lastScrollTime = performance.now(), focusCard = null, hovering = false;

  function measure() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    const bounds = section.getBoundingClientRect();
    progress = clamp(-bounds.top / Math.max(1, section.offsetHeight - height));
  }
  function visibility(element, visible) {
    element.style.opacity = String(visible);
    element.style.visibility = visible > .02 ? 'visible' : 'hidden';
    element.inert = visible <= .1;
  }
  function paint(delta) {
    const compact = width < 768;
    const shift = smooth(.04, .64, progress);
    const exit = smooth(.80, 1, progress);
    // Focus or hover holds cards still so moving targets remain usable.
    if (!focusCard && !hovering) phase += delta * (.075 + momentum * 1.8);
    momentum *= Math.exp(-delta * 4);
    const rotation = phase + progress * 3.8;
    const headingScale = 1 - shift * (compact ? .49 : .68);
    const targetX = compact ? width * .20 : width * .30;
    const targetY = -height * (compact ? .235 : .16);
    heading.style.transform = `translate3d(${shift * targetX}px, ${shift * targetY}px, 0) scale(${headingScale})`;
    eyebrow.style.opacity = String(1 - shift);
    visibility(intro, 1 - smooth(.03, .31, progress));
    intro.style.transform = `translateY(${-shift * 25}px)`;
    visibility(discover, smooth(.28, .64, progress));
    discover.style.transform = `translateY(${(1 - shift) * 35}px)`;
    shade.style.transform = `translateX(${-shift * width * .27}px)`;
    scrollCue.style.opacity = String(1 - exit);
    progressBar.style.transform = `scaleX(${progress})`;

    cards.forEach((card, index) => {
      if (card === focusCard) return;
      const ring = index % 3;
      const slot = Math.floor(index / 3);
      const direction = ring === 1 ? -.8 : 1;
      const ringCount = Math.ceil((cards.length - ring) / 3);
      const angle = slot / ringCount * Math.PI * 2 + ring * 1.65 + rotation * direction;
      const rx = width * (compact ? .49 + ring * .10 : .37 + ring * .09);
      const ry = height * (.34 + ring * .065);
      const depth = Math.sin(angle + ring * .8);
      const scale = .65 + (depth + 1) * .22;
      const x = Math.cos(angle) * rx + shift * width * (compact ? .34 : .17);
      const y = Math.sin(angle) * ry + Math.cos(angle) * height * (ring - 1) * .11;
      const bank = Math.sin(angle + ring) * 13;
      const yaw = Math.sin(angle) * 22;
      card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) perspective(900px) rotateY(${yaw.toFixed(2)}deg) rotateZ(${bank.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      card.style.zIndex = String(Math.round((depth + 1) * 8));
      card.style.opacity = String(.46 + (depth + 1) * .27);
    });
  }
  function tick(time) {
    frame = null;
    if (!enabled || !inView || document.hidden) { previousTime = 0; return; }
    const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 0;
    previousTime = time;
    paint(delta);
    frame = requestAnimationFrame(tick);
  }
  function schedule() {
    if (enabled && inView && !document.hidden && frame === null) frame = requestAnimationFrame(tick);
  }
  function cancel() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previousTime = 0;
  }
  function applyPreference() {
    const next = !reduced.matches && !document.documentElement.classList.contains('motion-off');
    if (next === enabled) return;
    const previousTop = section.getBoundingClientRect().top;
    const previousHeight = section.offsetHeight;
    enabled = next;
    cancel();
    section.classList.toggle('is-animated', enabled);
    if (!enabled) {
      [heading, eyebrow, intro, discover, shade, progressBar, scrollCue, ...cards].forEach(element => element.removeAttribute('style'));
      intro.inert = false;
      discover.inert = true;
    }
    // Preserve the following content's position when the global motion switch is used.
    if (previousTop + previousHeight < 0) scrollBy(0, section.offsetHeight - previousHeight);
    measure();
    if (enabled) paint(0);
    schedule();
  }
  addEventListener('scroll', () => {
    const now = performance.now();
    if (inView) {
      momentum = Math.min(5, momentum + Math.abs(scrollY - lastScroll) / Math.max(16, now - lastScrollTime) * .45);
      measure();
    }
    lastScroll = scrollY;
    lastScrollTime = now;
    schedule();
  }, { passive: true });
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (inView) { measure(); schedule(); } else cancel();
  }).observe(section);
  new ResizeObserver(() => { measure(); if (enabled) paint(0); }).observe(stage);
  new MutationObserver(applyPreference).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  reduced.addEventListener('change', applyPreference);
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancel(); else schedule(); });
  addEventListener('pagehide', cancel);
  addEventListener('pageshow', () => { measure(); schedule(); });
  cards.forEach(card => {
    card.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') hovering = true; });
    card.addEventListener('pointerleave', () => { hovering = false; });
    card.addEventListener('focus', () => {
      focusCard = card;
      if (!enabled) return;
      card.style.transform = `translate(-50%, -50%) translate3d(${width * .28}px, 0, 0) scale(1.12)`;
      card.style.opacity = '1';
      card.style.zIndex = '20';
    });
    card.addEventListener('blur', () => { focusCard = null; });
  });
  applyPreference();
})();
