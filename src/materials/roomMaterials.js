import * as THREE from "three";

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  metalness: 0,
  roughness: 0,
  transmission: 1,
  thickness: 0.7,
  envMapIntensity: 1,
});

export const metallicMaterial = new THREE.MeshPhysicalMaterial({
  color: "#f69104",
  metalness: 1,
  roughness: 0.2,
  envMapIntensity: 1,
});
