import * as THREE from "three";
import Experience from "../../Experience";

export default class Ground {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setInstance();
  }

  setInstance() {
    const geometry = new THREE.PlaneGeometry(1000, 1000);
    const material = new THREE.MeshStandardMaterial({
      color: "#876445",
      metalness: 0,
      roughness: 1,
    });

    this.plane = new THREE.Mesh(geometry, material);
    this.plane.rotation.x = -Math.PI * 0.5;
    this.plane.receiveShadow = true
    this.scene.add(this.plane);
  }
}
