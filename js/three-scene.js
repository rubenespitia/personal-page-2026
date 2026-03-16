/* ══════════════════════════════════════════════════════
   three-scene.js
   Three.js scene: particle sphere + dual wireframe cubes + orbit ring
   Depends on: three.js (loaded before this script in index.html)
══════════════════════════════════════════════════════ */

(function () {
  const canvas    = document.getElementById('three-canvas');
  const container = canvas.parentElement;
  const W = () => container.clientWidth;
  const H = () => container.clientHeight;

  /* ── Renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W(), H());
  renderer.setClearColor(0x000000, 0);

  /* ── Scene & Camera ── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 100);
  camera.position.set(0, 0, 5);

  /* ── Particle Sphere ── */
  const SPHERE_COUNT = 1800;
  const sGeo  = new THREE.BufferGeometry();
  const sPos  = new Float32Array(SPHERE_COUNT * 3);
  const sCols = new Float32Array(SPHERE_COUNT * 3);

  for (let i = 0; i < SPHERE_COUNT; i++) {
    // Fibonacci sphere distribution for even coverage
    const phi   = Math.acos(1 - 2 * (i + 0.5) / SPHERE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r     = 2.0 + (Math.random() - 0.5) * 0.15;

    sPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    sPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    sPos[i * 3 + 2] = r * Math.cos(phi);

    // Amber → red colour spectrum
    const t = Math.random();
    sCols[i * 3]     = 1.0;
    sCols[i * 3 + 1] = 0.35 + t * 0.25;
    sCols[i * 3 + 2] = t * 0.1;
  }

  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute('color',    new THREE.BufferAttribute(sCols, 3));

  const sMat = new THREE.PointsMaterial({
    size: 0.028,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const spherePoints = new THREE.Points(sGeo, sMat);
  scene.add(spherePoints);

  /* ── Outer Wireframe Cube ── */
  const cubeGeo  = new THREE.BoxGeometry(1.2, 1.2, 1.2);
  const cubeEdge = new THREE.EdgesGeometry(cubeGeo);
  const cubeMat  = new THREE.LineBasicMaterial({
    color: 0xff6a00,
    transparent: true,
    opacity: 0.55,
  });
  const cube = new THREE.LineSegments(cubeEdge, cubeMat);
  scene.add(cube);

  /* ── Inner Wireframe Cube ── */
  const innerGeo  = new THREE.BoxGeometry(0.6, 0.6, 0.6);
  const innerEdge = new THREE.EdgesGeometry(innerGeo);
  const innerMat  = new THREE.LineBasicMaterial({
    color: 0xe8001a,
    transparent: true,
    opacity: 0.4,
  });
  const innerCube = new THREE.LineSegments(innerEdge, innerMat);
  scene.add(innerCube);

  /* ── Orbit Ring ── */
  const ringGeo = new THREE.TorusGeometry(2.4, 0.004, 2, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xff8c00, transparent: true, opacity: 0.2 });
  const ring    = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.5;
  scene.add(ring);

  /* ── Mouse Interaction ── */
  let targetRotX = 0, targetRotY = 0;
  let currentRotX = 0, currentRotY = 0;

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    targetRotY = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.2;
    targetRotX = ((e.clientY - rect.top)  / rect.height - 0.5) * 0.8;
  });
  container.addEventListener('mouseleave', () => {
    targetRotX = 0;
    targetRotY = 0;
  });

  /* ── Resize ── */
  window.addEventListener('resize', () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  });

  /* ── Animation Loop ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.004;

    // Smooth mouse follow (lerp)
    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    spherePoints.rotation.y = t * 0.18 + currentRotY;
    spherePoints.rotation.x = t * 0.07 + currentRotX;

    // Outer cube counter-rotates for hypnotic effect
    cube.rotation.x = t * 0.35 + currentRotX * 0.5;
    cube.rotation.y = t * 0.50 + currentRotY * 0.5;
    cube.rotation.z = t * 0.20;

    // Inner cube spins opposite
    innerCube.rotation.x = -t * 0.55;
    innerCube.rotation.y = -t * 0.40 - currentRotY;
    innerCube.rotation.z =  t * 0.30;

    // Ring gentle tilt
    ring.rotation.z = t * 0.08;
    ring.rotation.x = Math.PI / 2.5 + Math.sin(t) * 0.08;

    // Particle opacity pulse
    sMat.opacity = 0.7 + Math.sin(t * 1.5) * 0.15;

    renderer.render(scene, camera);
  }

  animate();
})();
