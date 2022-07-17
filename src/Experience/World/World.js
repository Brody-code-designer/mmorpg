import * as THREE from 'three'
import Experience from "../Experience.js";
import Environment from './Environment/Environment.js';

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.environment = new Environment
        // mesh
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        )
        this.scene.add(this.mesh)
    }

    update(){
        // console.log("updating mesh");
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.y += 0.01
    }
}