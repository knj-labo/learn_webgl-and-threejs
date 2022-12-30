export default class Sizes {
    constructor() {
      console.log("Hello Size class")

      // Setup
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)

      window.addEventListener('resize', () => {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      })
    }
}