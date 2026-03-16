/* ══════════════════════════════════════════════════════
   cursor.js
   Diamond-shaped custom cursor with lagging ring.
   Expands on interactive elements.
══════════════════════════════════════════════════════ */

(function () {
  const dot  = document.getElementById('c-dot');
  const ring = document.getElementById('c-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  // Dot follows cursor instantly
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Ring follows with eased lag
  (function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Expand on hover over interactive elements
  const targets = 'a, button, .flip-card, .sc, .sk-row';
  document.querySelectorAll(targets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width   = '14px';
      dot.style.height  = '14px';
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.opacity = '.75';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width   = '8px';
      dot.style.height  = '8px';
      ring.style.width  = '30px';
      ring.style.height = '30px';
      ring.style.opacity = '.35';
    });
  });
})();
