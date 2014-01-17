width  = 700
height = 700
cubes = []
count = 10
i


# scene
scene = new THREE.Scene();
# geometry 立方体


for i in [0..9]
  geometry = new THREE.CubeGeometry(50, 50, 50);
  material = new THREE.MeshLambertMaterial({color : "red"})
  cubes[i] = new THREE.Mesh(geometry, material)
  cubes[i].position.set(0+Math.random(100)*50, 50+Math.random(100)*50, 0+Math.random(100)*50)
  # add shadow
  cubes[i].castShadow = true
  scene.add(cubes[i])




geometry = new THREE.CubeGeometry(50, 50, 50);
# 光を反射しないマテリアル 全面が光る感じになるテクスチャ
# material = new THREE.MeshBasicMaterial({color : "red"})
# 光を反射するマテリアル
material = new THREE.MeshLambertMaterial({color : "red"})
cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 50, 0)
# add shadow
cube.castShadow = true
scene.add(cube)

# 球
sGeometry = new THREE.SphereGeometry( 200, 20, 20 )
#sMaterial = new THREE.MeshLambertMaterial({color : "blue"})
sMaterial = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( './img/2000px-BlankMap-World6.png' ), overdraw: true } )

sphere = new THREE.Mesh(sGeometry, sMaterial)
sphere.position.set(100, 100, 0)
sphere.castShadow = true
scene.add(sphere)

# plane
pGeometry = new THREE.PlaneGeometry(300, 300);
pMaterial = new THREE.MeshLambertMaterial({color : "green",side: THREE.DoubleSide})
plane = new THREE.Mesh(pGeometry, pMaterial)
plane.position.set(0, 0, 0)
# 回転
plane.rotation.x = (90.0 / 180.0) * Math.PI
# add shadow
plane.receiveShadow = true
scene.add(plane)


# デバッグ用の軸をhelperで表示
axis = new THREE.AxisHelper(1000)
axis.position.set(0, 0, 0)
scene.add(axis)

# light
light = new THREE.DirectionalLight(0xffffff, 1)
# add shadow
light.castShadow = true
light.position.set(0, 300, 30)
scene.add(light)

# 環境光
ambient = new THREE.AmbientLight(0x333333)
scene.add(ambient)

# camera
camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
camera.position.set(200, 300, 500)
camera.lookAt(cube.position)

# rendering
renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)
renderer.setClearColor(0xeeeeee, 1)
# shadow
renderer.shadowMapEnabled = true
document.getElementById('stage').appendChild(renderer.domElement)

# control
controls = new THREE.OrbitControls(camera, renderer.domElement)

# animation
render = ()->
  requestAnimationFrame(render)
  cube.rotation.x += 1 * Math.PI /180
  cube.rotation.y += 1 * Math.PI /180
  cube.rotation.z += 1 * Math.PI /180
  cube.position.x = Math.sin(new Date().getTime()/200) * 100
  cube.position.z = Math.cos(new Date().getTime()/200) * 100
  cube.position.y = 100 + Math.sin(new Date().getTime()/200) * 100

  for i in [0..9]
  	#console.log cubes[i]
  	cubes[i].rotation.x += (1 + Math.random(1)) * Math.PI /180
  	cubes[i].rotation.y += (1 + Math.random(2)) * Math.PI /180
  	cubes[i].rotation.z += (1 + Math.random(3)) * Math.PI /180
  	cubes[i].position.x = Math.sin(new Date().getTime()/200 + Math.random()*0.1) * 100
  	cubes[i].position.z = Math.cos(new Date().getTime()/200 + Math.random()*0.1) * 100
  	cubes[i].position.y = 100 + Math.sin(new Date().getTime()/200+ Math.random()*0.1) * 100

  controls.update()
  renderer.render(scene, camera)

# do animation
render()
#renderer.render(scene, camera)
