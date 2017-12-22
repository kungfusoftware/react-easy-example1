import ReactDOM from 'react-dom';
import React from 'react';
import Greeter from './greeter';
import LocationGroup from './LocationGroup'

let greeter = (
  <div>
  <Greeter />
  <LocationGroup />
  </div>
)

ReactDOM.render(greeter, document.getElementById('app'));
