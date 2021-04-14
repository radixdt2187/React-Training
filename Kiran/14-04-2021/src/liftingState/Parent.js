import React,{ Component }  from 'react';
import Child from './Child'
   
class Parent extends Component {
  
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ''};
  }
  
  handleTextChange(newText) {
    this.setState({text: newText});
  }
   
  render() {
    return (
       <div className="card">
          <Child text={this.state.text} 
             handleTextChangeChild={this.handleTextChange}/>
             {this.state.text}
        </div>
      
    );
  }
}
  
export default Parent;