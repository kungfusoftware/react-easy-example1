import React from 'react';
import LocationAutocomplete from './location-autocomplete';


class Demo3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '8233 greensboro, mclean, va',
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
    console.log("place",place );
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
            initValue={this.state.address}
            className = "location"
            placeholder="type to search"
            googleAPIKey="AIzaSyDYttHNAjUnl9UU9RpoccCP-ESM4DgPwLY"
            onChange={this.handleOnChange}
            onDropdownSelect={this.onDropdownSelect}
            />

      </div>
    )
  }
}
export default Demo3;