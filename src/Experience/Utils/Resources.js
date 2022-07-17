import EventEmitter from "./EventEmitter.js";
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Resources extends EventEmitter {
    constructor(sources){
        super()

        this.sources = sources

        //setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
    }

    startLoading() {
        for(const source of this.sources){
            if(source.type === 'gltfModel'){
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file){
        this.items[source.name] = file
        
        this.loaded++

        if(this.loaded === this.toLoad){
            this.trigger('ready')
        }
    }
}