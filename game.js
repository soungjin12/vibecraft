import * as THREE from "three";

const scene = new THREE.Scene();

scene.background =
new THREE.Color(0x87ceeb);

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
antialias:false
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(
renderer.domElement
);
