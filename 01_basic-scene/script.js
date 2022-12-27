// like a container
// put objects, models, light, etc. in it
// At some point we ask Three.js to render that scene

// Scene
const scene = new THREE.Scene();

// Red cube and Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// not visible
// serve as point of view when doing a render
// different types
// going t use PerspectiveCamera

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)