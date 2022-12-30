import { Scene } from 'three'
import Sizes from './utils/sizes.js'
import Time from './utils/time.js'
import Camera from './camera.js'
import Renderer from './renderer.js'

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
        this.camera = new Camera(this)
        this.renderer = new Renderer()

        this.sizes.on('resize', this.resize)

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
      this.camera.resize()
    }

    update() {

    }
}