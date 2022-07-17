import Ground from './Ground.js'
import Lights from './Lights/Lights.js'

export default class Environment {
    constructor(){
        this.lights = new Lights()
        this.ground = new Ground()
    }
}