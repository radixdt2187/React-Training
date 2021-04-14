import React, { Component } from 'react'


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const   validateForm = (errors) => {
 let valid = true;
    return Object.keys(errors).length===0?null:errors;

//  Object.values(errors).forEach(
//    (val) => val.length > 0 && (valid = false)
//  );
//  return valid;
    
}

class LoginValidation extends Component {
   

    
    constructor(props) {
      super(props);
this.handleUserChange= this.handleUserChange.bind(this);

      this.state = {
        list:[],
        username: null,
        password: null,
        errors: {
          username: '',
          password: '',
        }
      };
    }
  
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
      switch (name) {
        case 'password': 
          errors.password = 
                value === "" ? 'Password is required'
              :  value.length < 8
              ? 'Password must be 8 characters long!'
              : '';
          break;
        default:
          break;
      }
  
      this.setState({errors, [name]: value});
    }
    handleUserChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
      switch (name) {
        case 'username': 
          errors.username = 
                 value ==="" ? 'User Name is required'
              :  value.length < 5 
              ? 'User Name must be 5 characters long!'
              : '';
          break;
        default:
          break;
      }
      this.setState({ input: event.target.value ,errors});
  
    }
   
    handleSubmit = (event) => {
      debugger
      event.preventDefault();
      const username = this.state.username;
      
        if((this.state.errors.username || this.state.errors.password)!="") return;
       
      else{
        let {list,input}=this.state;
        //   let list = [...this.state.list];
          list.push({
            username: input
          });
          this.props.onUserNameChange(list);
        }
      }
     
  

    render() {
        const username = this.props.username;
      const {errors} = this.state;
      return (
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2>Log In </h2>
            <form >
              <div className='username'>
                <label htmlFor="username">User Name</label>
                <input type='text' name='username' value={this.props.username} onChange={this.handleUserChange}  required />
                {errors.username.length > 0 && 
                  <span className='error'>{errors.username}</span>}
              </div>
         
              <div className='password'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' onChange={this.handleChange}  required/>
                {errors.password.length > 0 && 
                  <span className='error'>{errors.password}</span>}
              </div>
              {/* <div className='info'>
                <small>Password must be eight characters in length.</small>
              </div> */}
              <div className='submit'>
                <button onClick={this.handleSubmit} >Login</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  export default LoginValidation;