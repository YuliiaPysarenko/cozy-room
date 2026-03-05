import { useLayoutEffect } from "react";
import { Center, useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { useCozyRoomAssets } from "../hooks/useCozyRoomAssets";
import { glassMaterial, metallicMaterial } from "../materials/roomMaterials";
import * as THREE from "three";

export default function CozyRoom() {
  const { nodes, bakedTexture, pictureTexture } = useCozyRoomAssets();
  // bakedTexture.flipY = false;
  // bakedTexture.minFilter = THREE.LinearFilter;
  // bakedTexture.generateMipmaps = false;

  // const pictureTexture = useTexture("./models/textures/picture.jpg");
  // pictureTexture.flipY = false;
  // pictureTexture.colorSpace = THREE.SRGBColorSpace;
  // pictureTexture.needsUpdate = true;

  useLayoutEffect(() => {
    if (nodes.picture && nodes.picture.geometry.attributes.uv) {
      nodes.picture.geometry.attributes.uv.needsUpdate = true;
    }
  }, [nodes]);

  return (
    <>
      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.9}
        enablePan={false}
      />
      <Center top>
        <group rotation={[0, 0, 0]}>
          <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
          <mesh geometry={nodes.lamp_light.geometry} />
          <mesh geometry={nodes.window_light.geometry} />
          <mesh
            geometry={nodes.curtain_rod.geometry}
            material={metallicMaterial}
          />
          <mesh
            geometry={nodes.curtain_rings.geometry}
            material={metallicMaterial}
          />
          <mesh
            geometry={nodes.lamp_handle.geometry}
            material={metallicMaterial}
          />
          <mesh geometry={nodes.table.geometry} material={glassMaterial} />
          <mesh geometry={nodes.picture.geometry}>
            <meshBasicMaterial map={pictureTexture} />
          </mesh>
        </group>
      </Center>
    </>
  );
}
