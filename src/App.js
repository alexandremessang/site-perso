import React from 'react';
import { Box, Grommet } from 'grommet';

import { Counter } from './features/counter/Counter';
/**
 * Exemple de composant importé d'un autre fichier
 * 
 * import { NewComp } from './features/NewComp';
 */



const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
    />
  );

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>Hello Grommet!</AppBar>
      <Counter />
    </Grommet>
  );
}

export default App;
