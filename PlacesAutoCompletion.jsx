import React from 'react'

import PlacesAutocomplete  from './placeAutocompletion'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '10603 beechknoll ln, potomac, md 20854, united state',
      geocodeResults: null,
      loading: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }

  // componentWillMount () {
  //       const script = document.createElement("script");

  //       script.src = "https://use.typekit.net/foobar.js";
  //       script.async = true;

  //       document.body.appendChild(script);
  //   }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
      })
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    })
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    )
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
      </div>
    )
  }

  handleScriptCreate() {
  this.setState({ scriptLoaded: false })
}
 
handleScriptError() {
  this.setState({ scriptError: true })
}
 
handleScriptLoad() {
  this.setState({ scriptLoaded: true })
}

  render() {
    const cssClasses = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <i className='fa fa-map-marker Demo__suggestion-icon'/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>)


    const Footer = () => (
      <div className="Demo__dropdown-footer">
        <div> footer
           {/* <img
            src={require('./images/powered_by_google_default.png')}
            className="Demo__dropdown-footer-image"
          />  */}
        </div>
      </div>
    )

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => { console.log('Blur event!'); },
      onFocus: () => { console.log('Focused!'); },
      autoFocus: true,
      placeholder: "Search Places",
      name: 'Demo__input',
      id: "my-input-id",
    }

    const shouldFetchSuggestions = ({ value }) => value.length > 2

    return (
      
      <div className='page-wrapper'>
  <Script
      url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYttHNAjUnl9UU9RpoccCP-ESM4DgPwLY&libraries=places"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />

   

        <div className='container'>
          <h1 className='display-3'>react-places-autocomplete <i className='fa fa-map-marker header'/></h1>

        </div>
        <div className='container'>
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            renderSuggestion={AutocompleteItem}
            renderFooter={Footer}
            onEnterKeyDown={this.handleSelect}
            classNames={cssClasses}
            inputProps={inputProps}
            shouldFetchSuggestions={shouldFetchSuggestions}
          />
          {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
          {!this.state.loading && this.state.geocodeResults ?
            <div className='geocoding-results'>{this.state.geocodeResults}</div> :
          null}
        </div>
      </div>
    )
  }
}

export default Demo
