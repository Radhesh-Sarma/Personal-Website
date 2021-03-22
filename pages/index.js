import React from 'react';
import Toggle from '../Components/Toggle'
import Content from '../Components/Content';
import Buttons from '../Components/Buttons';
import  Particles from '../Components/Particles';
import {Row,Col} from 'react-bootstrap';

export default function Home() {
  return (
    <div className = "app">
 <Particles/>
      <Row>
        <Toggle/>
      </Row>
      <br/>
      <Row>
      <Content/>
      </Row>
      <Row>
      <Buttons/>
      </Row>

    </div>
  )
}
