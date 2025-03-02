import { FC, PropsWithChildren } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const Environment: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Canvas>
      <OrbitControls maxDistance={15} minDistance={4} />

      <ambientLight intensity={1} />

      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={1} />
      <directionalLight position={[-10, 5, -10]} intensity={1} />
      {children}
    </Canvas>
  );
};
