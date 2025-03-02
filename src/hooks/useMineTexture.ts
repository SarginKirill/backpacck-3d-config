import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { colors } from '../utils/colors';
import { Context } from '../utils/Context';

export const useMineTexture = (
  bodyColor: Context['bodyColor'],
  metallColor: Context['metallColor']
) => {
  const textureNormalize = (textures: THREE.Texture[]) =>
    textures.forEach((texture) => (texture.flipY = false));

  const [fabricBaseColor, fabricNormal, fabricOrm] = useTexture(
    [
      '/backpacck-3d-config/assets/fabric_baseColor.jpg',
      '/backpacck-3d-config/assets/fabric_normal.jpg',
      '/backpacck-3d-config/assets/fabric_occlusionRoughnessMetallic.jpg',
    ],
    textureNormalize
  );

  const [leatherBaseColor, leatherNormal, leatherOrm] = useTexture(
    [
      '/backpacck-3d-config/assets/leather_baseColor.jpg',
      '/backpacck-3d-config/assets/leather_normal.jpg',
      '/backpacck-3d-config/assets/leather_occlusionRoughnessMetallic.jpg',
    ],
    textureNormalize
  );

  const [denimBaseColor, denimNormal, denimOrm] = useTexture(
    [
      '/backpacck-3d-config/assets/denim_baseColor.jpg',
      '/backpacck-3d-config/assets/denim_normal.jpg',
      '/backpacck-3d-config/assets/denim_occlusionRoughnessMetallic.jpg',
    ],
    textureNormalize
  );

  const [metallBaseColor, metallNormal, metallORM] = useTexture(
    [
      '/backpacck-3d-config/assets/metall_baseColor.jpg',
      '/backpacck-3d-config/assets/metall_normal.jpg',
      '/backpacck-3d-config/assets/metall_occlusionRoughnessMetallic.jpg',
    ],
    textureNormalize
  );

  const [strapBaseColor, strapNormal, strapORM] = useTexture(
    [
      '/backpacck-3d-config/assets/strap_baseColor.jpg',
      '/backpacck-3d-config/assets/strap_normal.jpg',
      '/backpacck-3d-config/assets/strap_occlusionRoughnessMetallic.jpg',
    ],
    textureNormalize
  );

  const leatherMaterial = new THREE.MeshStandardMaterial({
    map: leatherBaseColor,
    normalMap: leatherNormal,
    aoMap: leatherOrm,
    roughnessMap: leatherOrm,
    metalnessMap: leatherOrm,
    roughness: 0.6,
    metalness: 0,
    color: colors.body[bodyColor],
  });

  const fabricMaterial = new THREE.MeshStandardMaterial({
    map: fabricBaseColor,
    normalMap: fabricNormal,
    aoMap: fabricOrm,
    roughnessMap: fabricOrm,
    metalnessMap: fabricOrm,
    roughness: 1,
    metalness: 0,
    color: colors.body[bodyColor],
  });

  const denimMaterial = new THREE.MeshStandardMaterial({
    map: denimBaseColor,
    normalMap: denimNormal,
    aoMap: denimOrm,
    roughnessMap: denimOrm,
    metalnessMap: denimOrm,
    roughness: 1,
    metalness: 0,
    color: colors.body[bodyColor],
  });

  const metallMaterial = new THREE.MeshStandardMaterial({
    map: metallBaseColor,
    normalMap: metallNormal,
    aoMap: metallORM,
    roughnessMap: metallORM,
    metalnessMap: metallORM,
    roughness: 0.5,
    metalness: 1,
    color: colors.metall[metallColor],
  });

  const strapMaterial = new THREE.MeshStandardMaterial({
    map: strapBaseColor,
    normalMap: strapNormal,
    aoMap: strapORM,
    roughnessMap: strapORM,
    metalnessMap: strapORM,
    roughness: 0.8,
    metalness: 0,
    color: colors.strap[bodyColor],
  });

  return {
    body: {
      leather: leatherMaterial,
      fabric: fabricMaterial,
      denim: denimMaterial,
    },
    metall: metallMaterial,
    strap: strapMaterial,
  };
};
