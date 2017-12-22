import React from 'react';

class Address extends React.Component {
   constructor(props){
       super(props);
       this.state = { address : props.address  };
       this.handleChange = this.handleChange.bind(this);
   }
    handleChange(value){
       event.preventDefault(); 
       this.setState({address: value});
    }
  render() {
      var displayClass ="inline";
      console.log("address=",this.props.address);
      if(this.props.address)  displayClass ="none";
    
    return (
    <div>
       Address: <label >{this.props.address}</label>
       <input size="100" placeholder="input other address" style={{display: displayClass}} type="text"  onChange={this.handleChange}/>
    </div>
    );
  }
}

export default Address;
