/* ══════════════════════════════════════════════════════
   i18n.js — Language toggle (ES / EN)
   Exposes window.i18n with .t(key), .toggle(), .lang
══════════════════════════════════════════════════════ */

window.i18n = (() => {

  const translations = {
    es: {
      /* Loader */
      'ldr-sub':      'SISTEMA INICIALIZANDO',
      'ldr-status-0': 'CARGANDO ACTIVOS...',
      'ldr-status-1': 'MONTANDO ESCENA 3D...',
      'ldr-status-2': 'COMPILANDO SHADERS...',
      'ldr-status-3': 'SISTEMA LISTO.',

      /* Toast */
      'toast-title': 'TRANSMISIÓN ENVIADA',
      'toast-sub':   'Te respondo a la brevedad.',

      /* Back to top */
      'back-top-aria': 'Volver arriba',

      /* Hero */
      'h-desc':       'Construyo sistemas robustos y experiencias digitales que funcionan — desde el servidor hasta la interfaz. JS, Node.js y Python. Basado en México, pensando en escala global.',
      'btn-projects': 'VER PROYECTOS',
      'btn-connect':  'CONECTAR',
      'status-bar':   'SISTEMA ONLINE · MX',

      /* About */
      'about-label': '// 01 — INIT',
      'about-title': 'Hola, soy <span>Ruben.</span>',
      'about-p1':    'Soy un <strong>Desarrollador de Software Mid-level</strong> con pasión por construir sistemas bien diseñados, código mantenible y productos digitales que resuelven problemas reales.',
      'about-p2':    'Mi stack principal gira alrededor de <strong>JavaScript/TypeScript</strong>, <strong>Node.js</strong> y <strong>Python</strong> — aunque de igual forma me adapto rápido a cualquier tecnología que el proyecto requiera.',
      'about-p3':    'Me interesa el diseño de sistemas, las buenas prácticas de arquitectura y escribir código que otros desarrolladores puedan leer sin querer cerrar el editor.',
      'cv-link':     '↓ DESCARGAR CV',
      'stat-exp':    'AÑOS EXP.',
      'stat-projects':'PROYECTOS',
      'stat-lang':   'LENGUAJE MAIN',
      'stat-loc':    'UBICACIÓN',
      'term-status': 'abierto a <span class="hi"></span> <span class="hi">full-time</span>',
      'term-node':   '<span class="hi">v22.x</span> · siempre en la última LTS',
      'term-coffee': '<span class="hi">undefined</span> — perdí la cuenta ☕',

      /* Skills */
      'skills-label':  '// 02 — STACK',
      'skills-title':  'Tecnologías <span>dominadas.</span>',
      'sk-languages':  'LENGUAJES',
      'sk-backend':    'BACKEND',
      'sk-database':   'BASE DE DATOS',
      'sk-frontend':   'FRONTEND',
      'sk-devops':     'DEVOPS',

      /* Timeline */
      'timeline-label': '// 03 — HISTORIAL',
      'timeline-title': 'Trayectoria <span>profesional.</span>',
      'tl-role-1':    'DEVELOPER',
      'tl-company-1': 'TECNOLOGÍA EN CUENTAS POR COBRAR (CXC) · CIUDAD, MX',
      'tl-desc-1':    'Desarrollo de interfaces reactivas y diseño de soluciones robustas bajo el ecosistema Laravel.',
      'tl-role-2':    'FORMACIÓN',
      'tl-company-2': 'UPIIZ - Unidad Profesional Interdisciplinaria de Ingeniería Campus Zacatecas IPN',
      'tl-desc-2':    'Consolidación en el mundo de la Ingenieria y la planeacion de proyectos en equipo.',
      'tl-role-3':    'FORMACIÓN',
      'tl-company-3': 'Centro de Estudios Científicos y Tecnológicos N° 18 Zacatecas IPN',
      'tl-desc-3':    'Inicio de mis principios como programador y semillas de futuras habilidades relacionadas al mundo del código.',

      /* Projects */
      'projects-label': '// 04 — BUILD',
      'projects-title': 'Trabajo <span>selecto.</span>',
      'flip-hint':      'HOVER PARA VER MÁS ↻',
      'proj-1-desc':    'Proyecto de Titulación de la Carrera.',
      'proj-2-desc':    'Manejo y predicciones para economías personales.',
      'proj-3-desc':    'Seguimiento de distintos comportamientos personales para su mejora.',

      /* Contact */
      'contact-label':         '// 05 — PING',
      'contact-title':         '¿Tienes un <span>proyecto?</span>',
      'contact-p':             'Disponible para colaboraciones, proyectos freelance o posiciones full-time. Escríbeme y te respondo en la brevedad.',
      'form-name-label':       'IDENTIFICACIÓN',
      'form-name-placeholder': 'Tu nombre completo',
      'form-email-label':      'CANAL DE RETORNO',
      'form-email-placeholder':'tu@email.com',
      'form-msg-label':        'TRANSMISIÓN',
      'form-msg-placeholder':  'Cuéntame sobre tu proyecto...',
      'form-submit':           'ENVIAR TRANSMISIÓN',
      'form-sending':          'ENVIANDO...',
      'form-sent':             '✓ ENVIADO',
      'form-error':            '✗ ERROR — INTENTA DE NUEVO',
      'form-offline':          '✗ SIN CONEXIÓN',

      /* Footer */
      'footer-rights': '© 2025 RUBEN A.D. ESPITIA · TODOS LOS DERECHOS RESERVADOS',
      'footer-credit': 'DISEÑADO & CODED · MX',

      /* Typing phrases */
      'phrases': [
        'Full-Stack Engineer',
        'Node.js Developer',
        'Builder de APIs escalables',
        'JavaScript & Python',
        'Resolviendo problemas reales',
      ],
    },

    en: {
      /* Loader */
      'ldr-sub':      'SYSTEM INITIALIZING',
      'ldr-status-0': 'LOADING ASSETS...',
      'ldr-status-1': 'MOUNTING 3D SCENE...',
      'ldr-status-2': 'COMPILING SHADERS...',
      'ldr-status-3': 'SYSTEM READY.',

      /* Toast */
      'toast-title': 'TRANSMISSION SENT',
      'toast-sub':   "I'll get back to you shortly.",

      /* Back to top */
      'back-top-aria': 'Back to top',

      /* Hero */
      'h-desc':       'I build robust systems and digital experiences that work — from server to interface. JS, Node.js & Python. Based in Mexico, thinking at global scale.',
      'btn-projects': 'VIEW PROJECTS',
      'btn-connect':  'CONNECT',
      'status-bar':   'SYSTEM ONLINE · MX',

      /* About */
      'about-label': '// 01 — INIT',
      'about-title': "Hi, I'm <span>Ruben.</span>",
      'about-p1':    "I'm a <strong>Mid-level Software Developer</strong> passionate about building well-designed systems, maintainable code, and digital products that solve real problems.",
      'about-p2':    'My main stack revolves around <strong>JavaScript/TypeScript</strong>, <strong>Node.js</strong> and <strong>Python</strong> — though I also adapt quickly to whatever technology a project requires.',
      'about-p3':    'I\'m interested in system design, good architectural practices, and writing code that other developers can read without wanting to close the editor.',
      'cv-link':     '↓ DOWNLOAD CV',
      'stat-exp':    'YEARS EXP.',
      'stat-projects':'PROJECTS',
      'stat-lang':   'MAIN LANGUAGE',
      'stat-loc':    'LOCATION',
      'term-status': 'open to <span class="hi"></span> <span class="hi">full-time</span>',
      'term-node':   '<span class="hi">v22.x</span> · always on the latest LTS',
      'term-coffee': '<span class="hi">undefined</span> — lost count ☕',

      /* Skills */
      'skills-label':  '// 02 — STACK',
      'skills-title':  'Technologies <span>mastered.</span>',
      'sk-languages':  'LANGUAGES',
      'sk-backend':    'BACKEND',
      'sk-database':   'DATABASE',
      'sk-frontend':   'FRONTEND',
      'sk-devops':     'DEVOPS',

      /* Timeline */
      'timeline-label': '// 03 — HISTORY',
      'timeline-title': 'Professional <span>journey.</span>',
      'tl-role-1':    'DEVELOPER',
      'tl-company-1': 'ACCOUNTS RECEIVABLE TECHNOLOGY (CXC) · CIUDAD, MX',
      'tl-desc-1':    'Development of reactive interfaces and design of robust solutions under the Laravel ecosystem.',
      'tl-role-2':    'EDUCATION',
      'tl-company-2': 'UPIIZ - Interdisciplinary Professional Unit of Engineering, Zacatecas Campus IPN',
      'tl-desc-2':    'Consolidation in the world of Engineering and team project planning.',
      'tl-role-3':    'EDUCATION',
      'tl-company-3': 'Center for Scientific and Technological Studies N° 18 Zacatecas IPN',
      'tl-desc-3':    'Beginning of my principles as a programmer and seeds of future skills related to the world of code.',

      /* Projects */
      'projects-label': '// 04 — BUILD',
      'projects-title': 'Selected <span>work.</span>',
      'flip-hint':      'HOVER TO SEE MORE ↻',
      'proj-1-desc':    'Graduation Project.',
      'proj-2-desc':    'Management and predictions for personal finances.',
      'proj-3-desc':    'Tracking of different personal behaviors for improvement.',

      /* Contact */
      'contact-label':         '// 05 — PING',
      'contact-title':         'Got a <span>project?</span>',
      'contact-p':             'Available for collaborations, freelance projects or full-time positions. Write to me and I\'ll get back to you shortly.',
      'form-name-label':       'IDENTIFICATION',
      'form-name-placeholder': 'Your full name',
      'form-email-label':      'RETURN CHANNEL',
      'form-email-placeholder':'you@email.com',
      'form-msg-label':        'TRANSMISSION',
      'form-msg-placeholder':  'Tell me about your project...',
      'form-submit':           'SEND TRANSMISSION',
      'form-sending':          'SENDING...',
      'form-sent':             '✓ SENT',
      'form-error':            '✗ ERROR — TRY AGAIN',
      'form-offline':          '✗ NO CONNECTION',

      /* Footer */
      'footer-rights': '© 2025 RUBEN A.D. ESPITIA · ALL RIGHTS RESERVED',
      'footer-credit': 'DESIGNED & CODED · MX',

      /* Typing phrases */
      'phrases': [
        'Full-Stack Engineer',
        'Node.js Developer',
        'Scalable API Builder',
        'JavaScript & Python',
        'Solving Real Problems',
      ],
    },
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function apply(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    /* Plain text nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = translations[lang][el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });

    /* Nodes that need innerHTML (contain <span>, <strong>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = translations[lang][el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });

    /* Input / textarea placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const val = translations[lang][el.dataset.i18nPlaceholder];
      if (val !== undefined) el.placeholder = val;
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = translations[lang][el.dataset.i18nAria];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* Toggle button label shows the OTHER language (what you'd switch to) */
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

    /* Notify main.js to restart typing with new phrases */
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  function toggle() {
    apply(currentLang === 'es' ? 'en' : 'es');
  }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ??
           (translations['es'][key]) ?? key;
  }

  /* Init on DOM ready */
  document.addEventListener('DOMContentLoaded', () => {
    apply(currentLang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });

  return { apply, toggle, t, get lang() { return currentLang; } };
})();
