# RUBEN A.D. ESPITIA — Portfolio 2026

Sitio web personal de portfolio. Construido con HTML, CSS y JavaScript vanilla — sin frameworks ni bundlers.

**Live:** [rubenespitiadeveloper.github.io/personal-page-2026](https://rubenespitiadeveloper.github.io/personal-page-2026/)

---

## Stack

- HTML5 / CSS3 / JavaScript (vanilla)
- [Three.js r128](https://threejs.org/) — escena 3D interactiva en el hero
- [Google Fonts](https://fonts.google.com/) — Orbitron, Rajdhani, Share Tech Mono
- [Formspree](https://formspree.io/) — envío real del formulario de contacto
- GitHub Pages — despliegue

---

## Estructura

```
personal-page-2026/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js          # Loader, nav, typing, scroll, magnetic buttons, mobile menu, form
    ├── three-scene.js   # Escena 3D con partículas, cubos wireframe y anillo orbital
    ├── particles.js     # Sistema de partículas 2D con repulsión por mouse
    ├── cursor.js        # Cursor personalizado (dot + ring)
    └── skills.js        # Animación de barras de skills
```

---

## Secciones

| # | ID | Contenido |
|---|-----|-----------|
| 01 | `#about` | Presentación, stats animados y terminal simulada |
| 02 | `#skills` | Barras de habilidades y pills de tecnologías |
| 03 | `#timeline` | Historial profesional y formación académica |
| 04 | `#projects` | Flip cards con proyectos seleccionados |
| 05 | `#contact` | Formulario real + links de contacto |

---

## Features UI

| Feature | Descripción |
|---------|-------------|
| **Loading screen** | Boot sequence animado con barra de progreso y estados |
| **Cursor personalizado** | Dot diamante + ring con lag, expansible en hover |
| **Escena Three.js** | Esfera de 1800 partículas, cubos wireframe y anillo orbital, interactivo con mouse |
| **Partículas 2D** | Canvas con partículas flotantes y conexiones, repulsión por proximidad |
| **Glitch text** | Animación de glitch en el nombre con clip-path |
| **Typing effect** | Texto rotativo con efecto de escritura/borrado |
| **Parallax hero** | Capas del hero se desplazan a velocidades distintas al hacer scroll |
| **Nav activo** | Link del nav se ilumina según la sección visible |
| **Menú hamburguesa** | Overlay fullscreen con stagger en links para móvil |
| **Magnetic buttons** | Botones que siguen el cursor levemente |
| **Barras de ecualizador** | 12 barras por lado oscilando en los extremos de la pantalla |
| **Scroll progress bar** | Barra de progreso de lectura en el top |
| **Contadores animados** | Stats numéricos cuentan desde 0 al entrar al viewport |
| **Scroll reveal** | Secciones entran con fadeUp + scale, labels con slide desde la izquierda |
| **Flip cards** | Proyectos con rotación 3D en hover |
| **Toast notification** | Confirmación visual al enviar el formulario |
| **Back to top** | Botón que aparece al bajar, smooth scroll al inicio |
| **Custom scrollbar** | Scrollbar estilizado con gradiente del tema |
| **Noise/grain overlay** | Textura sutil de grano sobre el fondo |
| **Scanlines overlay** | Efecto CRT con líneas de escaneo |

---

## Paleta de colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--bg` | `#080608` | Fondo principal |
| `--amber` | `#ff8c00` | Color de acento principal |
| `--amber2` | `#ff6a00` | Acento secundario |
| `--red` | `#e8001a` | Acento rojo |
| `--text` | `#f0dcc8` | Texto principal |
| `--muted` | `#7a6555` | Texto secundario |

---

## Desarrollo local

No requiere instalación. Abre `index.html` directamente en el navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 3000

# Con Node.js
npx serve .
```

---

## Despliegue

El sitio se despliega automáticamente en GitHub Pages al hacer push a `main`.

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

---

## Contacto

- Email: ruben.0519@hotmail.com
- GitHub: [github.com/rubenespitia](https://github.com/rubenespitia)
- LinkedIn: [Rubén Alonso Delgado Espitia](https://www.linkedin.com/in/rubén-alonso-delgado-espitia-897863285/)
