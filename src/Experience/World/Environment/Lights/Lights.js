import * as THREE from 'three'
import Experience from '../../../Experience.js'

export default class Lights {
    constructor(){
        this.experience = new Experience
        this.scene = this.experience.scene

        this.setSunlight()
        // this.setAmbientLight()
    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 4)
        this.sunLight.position.set(3.5, 2, -1.25)
        this.scene.add(this.sunLight)
    }
    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight("#ffffff", 4)
        this.scene.add(this.ambientLight)
    }
}