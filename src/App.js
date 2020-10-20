import React from 'react';
import { Avatar, Box, Grommet } from 'grommet';

/**
 * Exemple de composant importé d'un autre fichier
 * 
 * import { NewComp } from './features/NewComp';
 */

 import { FirstSection } from './features/FirstSection';



const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  avatar: {
    extend: `border: 1px solid #DB7F1F; 
            box-shadow: 2px 2px 15px 1px #DB7F1F;`,
  },
};


function App() {
  return (
    <Grommet theme={theme} full="true">

      <FirstSection />
      
      


    </Grommet>
  );
}

export default App;
