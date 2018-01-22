import React from 'react';
import LocationAutocomplete from './location-autocomplete';


class Demo3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onDropdownSelect = this.onDropdownSelect.bind(this);
  }
   handleOnChange(e){
    this.setState({address: e.target.value});
     console.log("address=",this.state.address);
   }

  onDropdownSelect(component) {
    // this will give you access to the entire location object, including
    // the `place_id` and `address_components`
    const place = component.autocomplete.getPlace();
    console.log("geolocation lat:",place.geometry.location.lat());
     console.log("geolocation long:",place.geometry.location.lng());
    // this will return a reference to the input field
    const inputField = component.input;
   console.log("input",inputField);
    // other awesome stuff
  }
   render() {

    return (
      <div>
            <LocationAutocomplete 
            name="venue"
            readOnly = {false}
            value={this.state.address}
            className = "location"
            placeholder="type to search address"
            googleAPIKey="AIzaSyDYttHNAjUnl9UU9RpoccCP-ESM4DgPwLY"
            onChange={this.handleOnChange}
            onDropdownSelect={this.onDropdownSelect}
            />

      </div>
    )
  }
}
export default Demo3;