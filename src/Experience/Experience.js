import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import sources from "./sources.js";
import Debug from "./Utils/Debug.js";
import Helpers from "./Helpers/Helpers.js";

// singleton to access the Experience
let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    // Global Access
    window.experience = this;

    // options
    this.canvas = canvas;

    //setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.world = new World();
    this.helpers = new Helpers()
    this.renderer = new Renderer();

    //Size Event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
