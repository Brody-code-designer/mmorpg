import * as THREE from 'three'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'

// singleton to access the Experience
let instance = null

export default class Experience {
    constructor(canvas){
        if(instance) {
            return instance
        }
        instance = this

        // Global Access
        window.experience = this

        // options
        this.canvas = canvas

        //setup
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.world = new World()
        this.renderer = new Renderer()

        this.animate()
    }

    animate(){
        window.requestAnimationFrame( () => this.animate())

        // console.log("animate");
        this.world.updateMesh()
        this.renderer.instance.render(this.scene, this.camera.instance)
        // this.instance.render(this.scene, this.camera.instance)
    }
}