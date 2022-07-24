import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import Experience from '../Experience.js';

export default class FPS{
    constructor(){
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.instance = this.experience.camera.instance

        this.moveForward = false
        this.moveBackward = false
        this.moveLeft = false
        this.moveRight = false
        
        this.setFPSControls()
        this.setEventListeners()
    }

    setFPSControls() {
        //FPS controls
        this.controls = new PointerLockControls(this.instance, this.canvas);
      }

    setEventListeners(){
        this.canvas.addEventListener("click", () => {
            this.controls.lock();
          });

          document.addEventListener("keydown", (e) => {
            this.onKeyDown(e)
          });

          document.addEventListener("keyup", (e) => {
            this.onKeyUp(e)
          })
    }

    onKeyDown(e){
        let key = e.code

        if (key === "KeyW"){
            this.moveForward = true
            this.controls.moveForward(0.1)
        } else if (key === "KeyS"){
            this.moveBackward = true
            this.controls.moveForward(-0.1)
        } else if (key === "KeyA"){
            this.moveLeft = true
            this.controls.moveRight(-0.1)
        } else if (key === "KeyD"){
            this.moveRight = true
            this.controls.moveRight(0.1)
        }
    }

    onKeyUp(e){
        let key = e.code

        if (key === "KeyW"){
            this.moveForward = false
        } else if (key === "KeyS"){
            this.moveBackward = false
        } else if (key === "KeyA"){
            this.moveLeft = false
        } else if (key === "KeyD"){
            this.moveRight = false
        }
    }
}