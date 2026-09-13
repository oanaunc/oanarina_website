(() => {
  'use strict';
  const dialog = document.getElementById('architecture-player-dialog');
  const player = document.getElementById('architecture-player');
  const error = document.getElementById('architecture-player-error');
  const cards = [...document.querySelectorAll('.architecture-video-card')];
  let current = 1;
  function release() {
    if (!player.hasAttribute('src')) return;
    player.pause();
    player.removeAttribute('src');
    player.load();
  }
  function play(index) {
    release();
    current = (index + cards.length - 1) % cards.length + 1;
    error.hidden = true;
    document.getElementById('architecture-player-title').textContent = `Architecture project ${current}`;
    player.poster = `videos/architecture/posters/archi${current}.jpg`;
    player.src = `videos/architecture/web/archi${current}.mp4`;
    player.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
  }
  cards.forEach(card => card.addEventListener('click', () => {
    dialog.showModal();
    play(Number(card.dataset.project));
  }));
  document.getElementById('architecture-video-close').addEventListener('click', () => dialog.close());
  document.getElementById('architecture-video-prev').addEventListener('click', () => play(current - 1));
  document.getElementById('architecture-video-next').addEventListener('click', () => play(current + 1));
  dialog.addEventListener('close', release);
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  player.addEventListener('error', () => { if (player.hasAttribute('src')) error.hidden = false; });
  function suspend() {
    release();
    if (dialog.open) dialog.close();
  }
  window.addEventListener('pagehide', suspend);
  document.addEventListener('visibilitychange', () => { if (document.hidden) suspend(); });
})();
