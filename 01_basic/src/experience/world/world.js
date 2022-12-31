import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three'
import Experience from '../experience.js'
import Environment from './environment.js';

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        // Test mesh
        const testMesh = new Mesh(
            new BoxGeometry(1, 1, 1),
            new MeshBasicMaterial()
        )
        this.scene.add(testMesh)

        // Setup
        this.environment = new Environment()
    }
}