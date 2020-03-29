import React from 'react';
import logo from './logo.svg';
import { Container, Button } from 'semantic-ui-react'
import Login from './Login'
import GridExample from './GridExample';
import ButtonExample from './Button'
import HeaderExample from './HeaderExample'
import FormExample from './FormExample'

function App() {
  return (
      <Container>
        <Login/>
        <GridExample/>
        <ButtonExample/>
        <HeaderExample/>
        <FormExample/>
      </Container>
    );
}

export default App;
