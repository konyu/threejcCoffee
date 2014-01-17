(function() {
  var ambient, axis, camera, controls, count, cube, cubes, geometry, height, i, light, material, pGeometry, pMaterial, plane, render, renderer, sGeometry, sMaterial, scene, sphere, width, _i;

  width = 700;

  height = 700;

  cubes = [];

  count = 10;

  i;

  scene = new THREE.Scene();

  for (i = _i = 0; _i <= 9; i = ++_i) {
    geometry = new THREE.CubeGeometry(50, 50, 50);
    material = new THREE.MeshLambertMaterial({
      color: "red"
    });
    cubes[i] = new THREE.Mesh(geometry, material);
    cubes[i].position.set(0 + Math.random(100) * 50, 50 + Math.random(100) * 50, 0 + Math.random(100) * 50);
    cubes[i].castShadow = true;
    scene.add(cubes[i]);
  }

  geometry = new THREE.CubeGeometry(50, 50, 50);

  material = new THREE.MeshLambertMaterial({
    color: "red"
  });

  cube = new THREE.Mesh(geometry, material);

  cube.position.set(0, 50, 0);

  cube.castShadow = true;

  scene.add(cube);

  sGeometry = new THREE.SphereGeometry(200, 20, 20);

  sMaterial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('./img/2000px-BlankMap-World6.png'),
    overdraw: true
  });

  sphere = new THREE.Mesh(sGeometry, sMaterial);

  sphere.position.set(100, 100, 0);

  sphere.castShadow = true;

  scene.add(sphere);

  pGeometry = new THREE.PlaneGeometry(300, 300);

  pMaterial = new THREE.MeshLambertMaterial({
    color: "green",
    side: THREE.DoubleSide
  });

  plane = new THREE.Mesh(pGeometry, pMaterial);

  plane.position.set(0, 0, 0);

  plane.rotation.x = (90.0 / 180.0) * Math.PI;

  plane.receiveShadow = true;

  scene.add(plane);

  axis = new THREE.AxisHelper(1000);

  axis.position.set(0, 0, 0);

  scene.add(axis);

  light = new THREE.DirectionalLight(0xffffff, 1);

  light.castShadow = true;

  light.position.set(0, 300, 30);

  scene.add(light);

  ambient = new THREE.AmbientLight(0x333333);

  scene.add(ambient);

  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  camera.position.set(200, 300, 500);

  camera.lookAt(cube.position);

  renderer = new THREE.WebGLRenderer();

  renderer.setSize(width, height);

  renderer.setClearColor(0xeeeeee, 1);

  renderer.shadowMapEnabled = true;

  document.getElementById('stage').appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  render = function() {
    var _j;
    requestAnimationFrame(render);
    cube.rotation.x += 1 * Math.PI / 180;
    cube.rotation.y += 1 * Math.PI / 180;
    cube.rotation.z += 1 * Math.PI / 180;
    cube.position.x = Math.sin(new Date().getTime() / 200) * 100;
    cube.position.z = Math.cos(new Date().getTime() / 200) * 100;
    cube.position.y = 100 + Math.sin(new Date().getTime() / 200) * 100;
    for (i = _j = 0; _j <= 9; i = ++_j) {
      cubes[i].rotation.x += (1 + Math.random(1)) * Math.PI / 180;
      cubes[i].rotation.y += (1 + Math.random(2)) * Math.PI / 180;
      cubes[i].rotation.z += (1 + Math.random(3)) * Math.PI / 180;
      cubes[i].position.x = Math.sin(new Date().getTime() / 200 + Math.random() * 0.1) * 100;
      cubes[i].position.z = Math.cos(new Date().getTime() / 200 + Math.random() * 0.1) * 100;
      cubes[i].position.y = 100 + Math.sin(new Date().getTime() / 200 + Math.random() * 0.1) * 100;
    }
    controls.update();
    return renderer.render(scene, camera);
  };

  render();

}).call(this);

/*
//@ sourceMappingURL=practice.js.map
*/