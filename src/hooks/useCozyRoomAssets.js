import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export const useCozyRoomAssets = () => {
  const { nodes } = useGLTF("./models/cozy_room.glb");
  
  const bakedTexture = useTexture("./models/textures/baked.jpg");
  const pictureTexture = useTexture("./models/textures/picture.jpg");

  useMemo(() => {
    bakedTexture.flipY = false;
    bakedTexture.minFilter = THREE.LinearFilter;
    
    pictureTexture.flipY = false;
    pictureTexture.colorSpace = THREE.SRGBColorSpace;
  }, [bakedTexture, pictureTexture]);

  return { nodes, bakedTexture, pictureTexture };
};