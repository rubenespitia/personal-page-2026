/* ══════════════════════════════════════════════════════
   main.js
   Loader, nav, typing, scroll reveal, magnetic buttons,
   mobile menu, and contact form handler.
══════════════════════════════════════════════════════ */

/* ── Equalizer Bars ── */
['eq-left', 'eq-right'].forEach(side => {
  const wrap = document.createElement('div');
  wrap.className = `eq ${side}`;
  for (let i = 0; i < 12; i++) {
    const bar = document.createElement('div');
    bar.className = 'eq-bar';
    const h     = Math.floor(Math.random() * 55 + 8);
    const dur   = (Math.random() * 0.9 + 0.35).toFixed(2);
    const delay = (Math.random() * 1.2).toFixed(2);
    bar.style.cssText = `--h:${h}px; --dur:${dur}s; --delay:${delay}s;`;
    wrap.appendChild(bar);
  }
  document.body.appendChild(wrap);
});

/* ── Loader ── */
(function () {
  const ldr    = document.getElementById('loader');
  const fill   = document.getElementById('ldr-fill');
  const pctEl  = document.getElementById('ldr-pct');
  const statEl = document.getElementById('ldr-status');
  const statuses = [
    i18n.t('ldr-status-0'),
    i18n.t('ldr-status-1'),
    i18n.t('ldr-status-2'),
    i18n.t('ldr-status-3'),
  ];
  let prog = 0;

  const iv = setInterval(() => {
    prog += Math.random() * 12 + 3;
    if (prog >= 100) {
      prog = 100;
      fill.style.width   = '100%';
      pctEl.textContent  = '100%';
      statEl.textContent = i18n.t('ldr-status-3');
      clearInterval(iv);
      setTimeout(() => ldr.classList.add('done'), 500);
    } else {
      fill.style.width   = prog + '%';
      pctEl.textContent  = Math.floor(prog) + '%';
      const si = prog < 30 ? 0 : prog < 60 ? 1 : prog < 85 ? 2 : 3;
      statEl.textContent = statuses[si];
    }
  }, 90);
})();

/* ── Mobile Menu ── */
const burger     = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Magnetic Buttons ── */
document.querySelectorAll('.btn-fire, .btn-ghost, .cv-link').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r  = btn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
    const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
    btn.style.transition = 'transform .1s ease, filter .2s';
    btn.style.transform  = `translate(${dx}px,${dy}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform .5s cubic-bezier(.2,1,.3,1), filter .2s';
    btn.style.transform  = '';
  });
});

/* ── Scroll Progress Bar ── */
const scrollBar = document.getElementById('scroll-bar');
function updateScrollBar() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = (scrollY / max * 100) + '%';
}

/* ── Back to Top ── */
const backTop = document.getElementById('back-top');
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Active Nav ── */
const navLinks     = document.querySelectorAll('.nav-links a');
const sectionIds = ['about', 'skills', 'timeline', 'projects', 'contact'];
function updateActiveNav() {
  const mid = scrollY + window.innerHeight * 0.38;
  let current = null;
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= mid) current = id;
  });
  navLinks.forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
  );
}

/* ── Parallax Hero ── */
const heroEl    = document.getElementById('hero');
const heroLeft  = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');
const hGrid     = document.querySelector('.h-grid');
const hGlow     = document.querySelector('.h-glow');
function updateParallax() {
  if (scrollY > heroEl.offsetHeight * 1.1) return;
  const y = scrollY;
  heroLeft.style.transform  = `translateY(${y * 0.13}px)`;
  heroRight.style.transform = `translateY(${y * 0.06}px)`;
  hGrid.style.transform     = `translateY(${y * 0.28}px)`;
  hGlow.style.transform     = `translateY(${y * 0.18}px)`;
}

/* ── Single scroll listener ── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', scrollY > 60);
  backTop.classList.toggle('visible', scrollY > 400);
  updateScrollBar();
  updateActiveNav();
  updateParallax();
});

/* ── Animated Counters ── */
const sgEl = document.querySelector('.sg');
if (sgEl) {
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.sn[data-count]').forEach(el => {
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const step   = 1200 / target;
        let current  = 0;
        const iv = setInterval(() => {
          current++;
          el.textContent = current + suffix;
          if (current >= target) clearInterval(iv);
        }, step);
      });
      counterObs.unobserve(sgEl);
    });
  }, { threshold: 0.5 });
  counterObs.observe(sgEl);
}

/* ── Typing effect ── */
let phrases = i18n.t('phrases');
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
let typeTimer = null;

function type() {
  const phrase = phrases[pi];
  typedEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);

  if (!deleting && ci === phrase.length + 1) {
    deleting = true;
    typeTimer = setTimeout(type, 1900);
    return;
  }
  if (deleting && ci === 0) {
    deleting = false;
    pi = (pi + 1) % phrases.length;
  }
  typeTimer = setTimeout(type, deleting ? 42 : 88);
}
typeTimer = setTimeout(type, 1000);

/* Restart typing when language changes */
document.addEventListener('langchange', () => {
  clearTimeout(typeTimer);
  phrases = i18n.t('phrases');
  pi = 0; ci = 0; deleting = false;
  typedEl.textContent = '';
  typeTimer = setTimeout(type, 300);
});

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

/* Add .slbl elements to reveal observer with left-slide class */
document.querySelectorAll('.slbl').forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

/* ── Contact Form ── */
const toast = document.getElementById('toast');
let toastTimer;

function showToast() {
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

async function hf(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button');
  const orig = btn.textContent;

  btn.textContent  = i18n.t('form-sending');
  btn.disabled     = true;

  try {
    const res = await fetch(form.action, {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(form),
    });

    if (res.ok) {
      btn.textContent      = i18n.t('form-sent');
      btn.style.background = 'var(--bg3)';
      btn.style.color      = '#5adb5a';
      showToast();
      form.reset();
      setTimeout(() => {
        btn.textContent      = orig;
        btn.style.background = '';
        btn.style.color      = '';
      }, 3500);
    } else {
      btn.textContent = i18n.t('form-error');
      btn.style.color = 'var(--red)';
      setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 3000);
    }
  } catch {
    btn.textContent = i18n.t('form-offline');
    btn.style.color = 'var(--red)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 3000);
  } finally {
    btn.disabled = false;
  }
}
