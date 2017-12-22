
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class LocationGroup extends React.Component {

  constructor(Property){
     super(Property);
  }
  getInitialState() {
    return {selectedValue: 'apple'};
  }

  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        <label>
          <Radio value="apple" />Apple
        </label>
        <label>
          <Radio value="orange" />Orange
        </label>
        <label>
          <Radio value="watermelon" />Watermelon
        </label>
      </RadioGroup>
    );
  }
}

export default LocationGroup;
