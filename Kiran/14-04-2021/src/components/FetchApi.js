import React from 'react'
 
class FetchApi extends React.Component {
    constructor(props)
    {
      super(props);
        this.state={todos:[]}
    }
    componentDidMount()
    {
      this.fetchAPI().then(response=>{
          console.log(response);
            this.setState({todos:response})
            console.log(this.state.todos);
        })
       
    }
 async   fetchAPI()
    {
       return fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json());
    }
    changeState=()=>
    {
        
    }
 
   render() {
       return (<div>
        {this.state.todos? this.state.todos.map((item,i)=>
        <p>{item.title}</p>

        )
    :null}
       </div>);
   }
}


 
export default FetchApi