(function() {
  var camera, cube, geometry, height, material, renderer, scene, width;

  width = 500;

  height = 300;

  scene = new THREE.Scene();

  geometry = new THREE.CubeGeometry(50, 50, 50);

  material = new THREE.MeshBasicMaterial({
    color: "red"
  });

  cube = new THREE.Mesh(geometry, material);

  cube.position.set(0, 0, 0);

  scene.add(cube);

  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  camera.position.set(200, 100, 500);

  camera.lookAt(cube.position);

  renderer = new THREE.WebGLRenderer();

  renderer.setSize(width, height);

  renderer.setClearColor('0x000000', 1);

  document.getElementById('stage').appendChild(renderer.domElement);

  renderer.render(scene, camera);

}).call(this);

/*
//@ sourceMappingURL=practice.js.map
*/