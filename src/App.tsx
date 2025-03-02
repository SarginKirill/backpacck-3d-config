import { useState } from 'react';
import './App.css';
import { Context, Config } from './utils/Context';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { Environment } from './components/Environment/Environment';
import { BackPack } from './components/BackPack/BackPack';

function App() {
  const [bodyColor, setBodyColor] = useState<Context['bodyColor']>('brown');
  const [metallColor, setMetallColor] =
    useState<Context['metallColor']>('silver');
  const [material, setMaterial] = useState<Context['material']>('leather');

  const bodyColorHandle = (value: Context['bodyColor']) => setBodyColor(value);
  const metallColorHandle = (value: Context['metallColor']) =>
    setMetallColor(value);
  const materialHandle = (value: Context['material']) => setMaterial(value);

  return (
    <main>
      <Config.Provider
        value={{
          bodyColor,
          metallColor,
          material,
          bodyColorHandle,
          metallColorHandle,
          materialHandle,
        }}
      >
        <Environment>
          <BackPack />
        </Environment>

        <ControlPanel />
      </Config.Provider>
    </main>
  );
}

export default App;
