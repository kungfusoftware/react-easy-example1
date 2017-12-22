
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Radio,RadioGroup} from 'react-radio-group';

class LocationGroup extends React.Component {

  constructor(prop){
     super(prop);
    this.state = {selectedValue : 'BahLocation'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <div>
      <RadioGroup
        name="location"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        <label>
          <Radio value="BahLocation" />Bah Location
        </label>
        <label>
          <Radio value="OtherLocation" />Other Location
        </label>
      </RadioGroup>
        <input type="text" value={this.state.selectedValue}/>
      </div>
    );
  }
}

export default LocationGroup;

