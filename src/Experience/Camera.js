import * as THREE from 'three'
import Experience from './Experience.js'

export default class Camera {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.setInstance()
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.instance.position.set(0, 1, 8)
        this.scene.add(this.instance)
    }
}