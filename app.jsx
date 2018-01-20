import ReactDOM from 'react-dom';
import React from 'react';
import Greeter from './greeter';
import Location from './Location'
import Contributors from './Location2';
import States from './Location3';
import Demo3 from './LocationAutocompletion';
//import Demo from './PlacesAutoCompletion'


let greeter = (
  <div>
  <Greeter />
  {/* <Location whichLocation="OtherLocation" office="" address="8345 herndon padssay, herndon, VA 20171" /> */}

  	{/* <Contributors label="Contributors (Async)" />

    	<States label="States" searchable /> */}
      <Demo3  />
  the place PlacesAutoCompletion <br/>
  {/* <Demo3 /> */}
  </div>
)

ReactDOM.render(greeter, document.getElementById('app'));
