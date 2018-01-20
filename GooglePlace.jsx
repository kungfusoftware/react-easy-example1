import React from 'react';
import Autocomplete from 'react-google-autocomplete';


class Demo2 extends React.Component {
  render() {
    return <Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place);
    }}
    types={['(regions)']}
    componentRestrictions={{country: "us"}}
/> ;
  }
}

export default Demo2;
