/* ══════════════════════════════════════════════════════
   particles.js
   2D canvas particle system for the hero background.
   Particles float, connect with lines, and repel from mouse.
══════════════════════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('particle-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles;
  let mouse = { x: -9999, y: -9999 };

  /* ── Resize ── */
  function resize() {
    const hero = document.getElementById('hero');
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  /* ── Particle ── */
  function Particle() { this.reset(); }

  Particle.prototype.reset = function () {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.r  = Math.random() * 1.4 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;

    const t      = Math.random();
    this.hue     = 15 + t * 20;    // 15°–35° (amber → orange-red)
    this.sat     = 90 + t * 10;
    this.lum     = 45 + t * 20;
    this.alpha     = Math.random() * 0.5 + 0.15;
    this.baseAlpha = this.alpha;
  };

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;

    // Mouse repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const d  = Math.hypot(dx, dy);
    if (d < 90) {
      const f  = (90 - d) / 90;
      this.x  += (dx / d) * f * 1.4;
      this.y  += (dy / d) * f * 1.4;
      this.alpha = Math.min(1, this.baseAlpha + f * 0.4);
    } else {
      this.alpha = this.baseAlpha;
    }

    // Wrap edges
    if (this.x < -10)   this.x = W + 10;
    if (this.x > W + 10) this.x = -10;
    if (this.y < -10)   this.y = H + 10;
    if (this.y > H + 10) this.y = -10;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue},${this.sat}%,${this.lum}%,${this.alpha})`;
    ctx.fill();
  };

  /* ── Connection Lines ── */
  function drawConnections() {
    const MAX_DIST = 105;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          const a = (1 - d / MAX_DIST) * 0.16;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,120,0,${a})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  /* ── Init ── */
  function init() {
    resize();
    const count = Math.min(Math.floor(W * H / 9500), 100);
    particles   = Array.from({ length: count }, () => new Particle());
  }

  /* ── Loop ── */
  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  /* ── Events ── */
  window.addEventListener('resize', resize);

  const hero = document.getElementById('hero');
  hero.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  init();
  loop();
})();
