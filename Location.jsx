
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Radio,RadioGroup} from 'react-radio-group';
import Autocomplete from 'react-autocomplete';
import $ from 'jquery';
import Address from './Address';

class Location extends React.Component {

  constructor(prop){
     super(prop);
    this.state = {
      LocationSelected : 'BahLocation', 
      officeSelected: "",
      addressSelected: '',
      autocompleteData: []
    };
    this.handleLocationSwitch = this.handleLocationSwitch.bind(this);
   
       this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
  }

  handleLocationSwitch(value) {
      event.preventDefault();
      console.log("Location selected: ",value);

    this.setState({LocationSelected: value, addressSelected: "", officeSelected:""});
    
  }
      /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
    retrieveDataAsynchronously(searchText){
        let _this = this;

        // Url of your website that process the data and returns a
        // that returns the data according to the sent text
        let url = "https://odatamovies.azurewebsites.net/odata/Movies?$filter=contains(tolower(Name),tolower('"+searchText+"'))";
        
        // $.ajax({
        //     url: url,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     type: "GET", /* or type:"GET" or type:"PUT" */
        //     dataType: "json",
        //     crossDomain : true,
        //     success: function (result) {
        //          _this.setState({
        //             autocompleteData: result.value
        //         });
        //         console.log(result);
        //     },
        //     error: function () {
        //         console.log("error");
        //     }
        // });

        // Configure a basic AJAX request to your server side API
        // that returns the data according to the sent text
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            let status = xhr.status;

            if (status == 200) {

                // Update the state with the remote data and that's it !
                _this.setState({
                    autocompleteData: xhr.response.value
                });

                // Show response of your server in the console
                console.log(xhr.response);
            } else {
                console.error("Cannot load data from remote source");
            }
        };

        xhr.send();
    }
    
    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    onChange(e){
        this.setState({
            officeSelected: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        this.retrieveDataAsynchronously(e.target.value);

        console.log("The Input Text has changed to ", e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    onSelect(val, item){
        this.setState({
            officeSelected: val, addressSelected : item.FullAddress
        });

        console.log("Option from 'database' selected : ", item.FullAddress);
    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    renderItem(item, isHighlighted){
        return (
            <li key={item.Id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.Name}
            </li>   
        ); 
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    getItemValue(item){
        return `${item.Name}`;
    }
 
  render() {
    
    var typeAheadDisplay = "inline";
    var addressDisplay ="none";
    if(this.state.LocationSelected == "OtherLocation")
    {  typeAheadDisplay ="none";  addressDisplay ="inline";}

    return (
      <div>
      <RadioGroup
        name="location"
        selectedValue={this.state.LocationSelected}
        onChange={this.handleLocationSwitch}>
        <label>
          <Radio value="BahLocation" />Bah Location
        </label>
        <label>
          <Radio value="OtherLocation" />Other Location
        </label>
      </RadioGroup>
       
      <span style={{display: typeAheadDisplay}} >  Office Name: 
                <Autocomplete
                   inputProps={{ placeholder: 'search office by name' }}
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.officeSelected}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />

      </span>
          <Address address ={this.state.addressSelected} display={addressDisplay} />
          Location Information: <input type="text" />
      </div>
    );
  }
}

export default Location;

