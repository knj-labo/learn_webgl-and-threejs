import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three'
import Experience from '../experience.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene


        // Test mesh
        const testMesh = new Mesh(
            new BoxGeometry(1, 1, 1),
            new MeshBasicMaterial({ wireframe: true })
        )
        this.scene.add(testMesh)
    }
}