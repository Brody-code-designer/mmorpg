import Experience from "../Experience.js";
import Dragon from './Enemies/Dragon.js';
import Environment from './Environment/Environment.js';

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.environment = new Environment
        this.resources = this.experience.resources

        //Once the resources is loaded
        this.resources.on('ready', () => {
            this.dragon = new Dragon()
        })
    }

    update(){
        if(this.dragon){
            this.dragon.update()
        }
    }
}