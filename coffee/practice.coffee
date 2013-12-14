width = 500
height = 300

# scene
scene = new THREE.Scene();
# geometry
geometry = new THREE.CubeGeometry(50, 50, 50);

material = new THREE.MeshBasicMaterial({color : "red"})

cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0, 0)

scene.add(cube)

# light

# camera
camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
camera.position.set(200, 100, 500)
camera.lookAt(cube.position)

# rendering
renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)
renderer.setClearColor('0x000000', 1)

document.getElementById('stage').appendChild(renderer.domElement)

renderer.render(scene, camera)
