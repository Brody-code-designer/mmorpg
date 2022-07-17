import * as THREE from 'three'
import Experience from '../../../Experience.js'

export default class Lights {
    constructor(){
        this.experience = new Experience
        this.scene = this.experience.scene

        this.debug = this.experience.debug
        //debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('SunLight')
        }

        this.setSunlight()
        // this.setAmbientLight()
    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 4)
        this.sunLight.position.set(3.5, 2, -1.25)
        this.scene.add(this.sunLight)

        //debug
        if(this.debug.active){
            this.debugFolder
            .add(this.sunLight, 'intensity')
            .name('sunLightIntensity')
            .min(0)
            .max(10)
            .step(0.001)

            this.debugFolder
            .add(this.sunLight.position, 'x')
            .name('sunLightX')
            .min(-5)
            .max(5)
            .step(0.001)

            this.debugFolder
            .add(this.sunLight.position, 'y')
            .name('sunLightY')
            .min(-5)
            .max(5)
            .step(0.001)
        }
    }
    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight("#ffffff", 4)
        this.scene.add(this.ambientLight)
    }
}