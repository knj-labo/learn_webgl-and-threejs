import Sizes from './utils/sizes.js'
import Time from './utils/time.js'
import { Scene } from 'three'

export default class Experience {
    constructor(canvas) {
        // global access
        window.experience = this
        // option
        this.canvas = canvas

        // setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new Scene()

        this.sizes.on('resize', this.resize)

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        console.log('A resize occurred')
    }

    update() {

    }
}