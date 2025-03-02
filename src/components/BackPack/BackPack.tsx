import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';
import { Config } from '../../utils/Context';
import { useMineTexture } from '../../hooks/useMineTexture';

export const BackPack = () => {
  const { scene, nodes } = useGLTF('/backpacck-3d-config/assets/backpack.glb');

  const { material, bodyColor, metallColor } = useContext(Config);

  const { body, metall, strap } = useMineTexture(bodyColor, metallColor);

  if (nodes.Mesh) {
    nodes.Mesh.material = body[material];
    nodes.Mesh.material.needsUpdate = true;
  }

  if (nodes.Mesh_1) {
    nodes.Mesh_1.material = metall;
    nodes.Mesh_1.material.needsUpdate = true;
  }
  if (nodes.Mesh_2) {
    nodes.Mesh_2.material = strap;
    nodes.Mesh_2.material.needsUpdate = true;
  }

  return <primitive object={scene} scale={10} position={[0, -2, 0]} />;
};
