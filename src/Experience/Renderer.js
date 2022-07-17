import * as THREE from 'three'
import Experience from './Experience.js'

export default class Renderer {
    constructor(){
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.setInstance()
        
    }

    setInstance(){
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.setSize(window.innerWidth, window.innerHeight)
    }
    
}