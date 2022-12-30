import Sizes from './utils/sizes.js'
import EventEmitter from "./utils/event-emitter";

export default class Experience {
    constructor(canvas) {
        // global access
        window.experience = this
        // option
        this.canvas = canvas

        // setup
        this.sizes = new Sizes()
        console.log(this.sizes.width)
        console.log(this.sizes.height)
        console.log(this.sizes.pixelRatio)

        // setup
        this.sizes.on('resize', this.resize)
    }

    resize() {
        console.log('A resize occurred')
    }
}