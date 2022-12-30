import { Scene } from 'three'
import Sizes from './utils/sizes.js'
import Time from './utils/time.js'
import Camera from "./camera"
import Renderer from './renderer.js'
import World from "./world/world"

let instance = null

export default class Experience {
    constructor(canvas) {

        // Singleton
        if(instance) {
            return instance
        }
        instance = this

        // global access
        window.experience = this
        // option
        this.canvas = canvas

        // setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.renderer.update()
    }
}