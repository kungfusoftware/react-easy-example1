import ReactDOM from 'react-dom';
import React from 'react';
import Greeter from './greeter';
import Location from './Location'

let greeter = (
  <div>
  <Greeter />
  <Location />
  </div>
)

ReactDOM.render(greeter, document.getElementById('app'));
