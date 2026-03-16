/* ══════════════════════════════════════════════════════
   main.js
   Nav scroll behaviour, typing effect,
   scroll reveal, and contact form handler.
══════════════════════════════════════════════════════ */

/* ── Nav: add .stuck class on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', scrollY > 60);
});

/* ── Typing effect ── */
const phrases = [
  'Full-Stack Engineer',
  'Node.js Developer',
  'Builder de APIs escalables',
  'JavaScript & Python',
  'Resolviendo problemas reales',
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const phrase = phrases[pi];
  typedEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);

  if (!deleting && ci === phrase.length + 1) {
    deleting = true;
    setTimeout(type, 1900);
    return;
  }
  if (deleting && ci === 0) {
    deleting = false;
    pi = (pi + 1) % phrases.length;
  }
  setTimeout(type, deleting ? 42 : 88);
}
setTimeout(type, 1000);

/* ── Scroll Reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Contact Form ── */
function hf(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('button');
  const orig = btn.textContent;

  btn.textContent       = '✓ TRANSMISIÓN ENVIADA';
  btn.style.background  = '#1a3515';
  btn.style.color       = '#5adb5a';

  setTimeout(() => {
    btn.textContent      = orig;
    btn.style.background = '';
    btn.style.color      = '';
    e.target.reset();
  }, 3500);
}
