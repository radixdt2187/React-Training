import React from 'react'
import LoginValidation from './LoginValidation';

class  ParentLogin extends React.Component{

constructor(props)
{
super(props);
this.handleUsernameChange= this.handleUsernameChange.bind(this);
this.state={username:'',list:[],count:0}
}


handleUsernameChange=(value)=>{
if(value.length>0)
this.setState({list:value, count: this.state.count + 1});

console.log(value);
console.log(this.state.count)
}

render(){
    // let listing=this.state.list.map((username)=><li key={username}>{username}</li>)
    const {  list } = this.state;

    const username=this.state.username;
    return(

        <div>
          
            
          <div className="count">
    <label>Count</label> : {this.state.count}</div>
            <div>
            <LoginValidation value={username} onUserNameChange={this.handleUsernameChange}></LoginValidation>
            </div>
            <div className="List_Name">
            Person List
            {list ? 
     list.map((list, index) => {
        return (<ul><li>{index+1}. {list.username}</li></ul>)
     })
:<div/>
}
            </div>
          
        </div>
    )
}
}

export default ParentLogin;