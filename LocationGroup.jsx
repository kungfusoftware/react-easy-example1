
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Radio,RadioGroup} from 'react-radio-group';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import options from './exampleData';
import Address from './Address';

class LocationGroup extends React.Component {

  constructor(prop){
     super(prop);
    this.state = {
      selectedValue : 'BahLocation', 
      multiple: false,
      ddlSelectedValue: ''
    };
    this.handleChange = this.handleLocationSwitch.bind(this);
    this.handleSelected = this.handleAddressSelected.bind(this);
  }

  handleLocationSwitch(value) {
    this.setState({selectedValue: value});
  }
  handleAddressSelected(value){
    event.preventDefault();
    console.log("value=",value);
    if(value.length >0){
      this.setState({ddlSelectedValue : value[0].name});
    }else{
      this.setState({ddlSelectedValue :""});    
    }
  }
 
  render() {
    const {multiple} = this.state;
    return (
      <div>
      <RadioGroup
        name="location"
        selectedValue={this.state.selectedValue}
        onChange={this.handleLocationSwitch}>
        <label>
          <Radio value="BahLocation" />Bah Location
        </label>
        <label>
          <Radio value="OtherLocation" />Other Location
        </label>
      </RadioGroup>
       
         <Typeahead
          labelKey="name"
          multiple={multiple}
          options={options}
           minLength={2}
          placeholder="Choose a state..."
          onChange ={this.handleAddressSelected}
          
        />
          <Address address ={this.state.ddlSelectedValue}  />
      </div>
    );
  }
}

export default LocationGroup;

