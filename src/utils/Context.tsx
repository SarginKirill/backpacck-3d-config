import { createContext } from 'react';

export type Context = {
  bodyColor: 'brown' | 'blue' | 'black';
  metallColor: 'gold' | 'silver' | 'black';
  material: 'leather' | 'fabric' | 'denim';
  bodyColorHandle: (value: Context['bodyColor']) => void;
  metallColorHandle: (value: Context['metallColor']) => void;
  materialHandle: (value: Context['material']) => void;
};

export const Config = createContext<Context>({
  bodyColor: 'brown',
  metallColor: 'silver',
  material: 'leather',
  bodyColorHandle: () => {},
  metallColorHandle: () => {},
  materialHandle: () => {},
});
