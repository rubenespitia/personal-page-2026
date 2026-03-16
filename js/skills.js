/* ══════════════════════════════════════════════════════
   skills.js
   Animates skill bars when the section enters the viewport.
   Uses IntersectionObserver — fires once, staggered per bar.
══════════════════════════════════════════════════════ */

(function () {
  let fired = false;
  const section = document.getElementById('skills-section');

  function animateBars() {
    if (fired) return;
    fired = true;

    document.querySelectorAll('.skill-fill').forEach((fill, i) => {
      setTimeout(() => {
        fill.style.width = fill.dataset.width + '%';
        fill.closest('.skill-item').classList.add('animated');
      }, i * 130);
    });
  }

  new IntersectionObserver(
    entries => { if (entries[0].isIntersecting) animateBars(); },
    { threshold: 0.25 }
  ).observe(section);
})();
