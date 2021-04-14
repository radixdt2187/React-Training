import React,{ Component } from 'react';
  
class Child extends Component {
  
constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
}
  
handleTextChange(e){
    this.props.handleTextChangeChild(e.target.value);
}
  
render() {
    return (
        <input value={this.props.text} 
               onChange={this.handleTextChange} />
    );
}
}
      
export default Child;