import React from 'react';

class Address extends React.Component {
   constructor(props){
       super(props);
       this.state = { address : props.address , display : props.display };
       this.handleChange = this.handleChange.bind(this);
   }
    handleChange(value){
       event.preventDefault(); 
       this.setState({address: value});
    }
  render() {
    
    return (
    <div>
       Address: <label >{this.props.address}</label>
       <input size="100" placeholder="input other address" style={{display: this.props.display}} type="text"  onChange={this.handleChange}/>
    </div>
    );
  }
}

export default Address;
