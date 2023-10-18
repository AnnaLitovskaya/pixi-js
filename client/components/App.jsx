/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

class App extends Component {
  render() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return (
      <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
        <Container position={[150, 150]}>
          <Sprite
            anchor={0.5}
            x={-75}
            y={-75}
            image="https://pixijs.io/pixi-react/img/bunny.png"
          />
          <Sprite
            anchor={0.5}
            x={0}
            y={0}
            image="https://pixijs.io/pixi-react/img/bunny.png"
          />
          <Sprite
            anchor={0.5}
            x={75}
            y={75}
            image="https://pixijs.io/pixi-react/img/bunny.png"
          />
        </Container>
      </Stage>
    );
  }
}

export default App;
