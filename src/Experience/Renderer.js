import * as THREE from 'three'
import { NoToneMapping } from 'three'
import Experience from './Experience.js'

export default class Renderer {
    constructor(){
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.debug = this.experience.debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('renderer')
        }

        this.setInstance()
    }

    setInstance(){
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding;
        this.instance.toneMapping = THREE.CineonToneMapping;
        this.instance.toneMappingExposure = 1.75;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
        this.instance.setClearColor('#211d20')
        this.instance.setSize(window.innerWidth, window.innerHeight)

        //debug
        if(this.debug.active){
            this.debugFolder
            .add(this.instance, 'toneMapping')
            .name('toneMapping')
            .options([THREE.CineonToneMapping, THREE.NoToneMapping])
            

            this.debugFolder
            .add(this.instance, 'toneMappingExposure')
            .name('toneMappingExposure')
            .min(0)
            .max(5)
            .step(0.001)


        }

    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
    
}