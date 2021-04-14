
import React from 'react'
import Input from './input'
import Joi, { errors } from 'joi-browser'
import Form from './Form'
export class LoginForm extends Form {

    state={
        data:{username:"" ,password:""},
        errors:{}
    };
    schema={
        username:Joi.string().required().label('UserName'),
        password:Joi.string().required().label('Password')
    };

   
        render() {

const  {data,errors}=this.state;
            return (
            <div className="card">
               <h1> Login</h1>
               <form onSubmit={this.handleSubmit}>
                <Input name="username" value={data.username}
                label="Username"
                onChange={this.handleChange}
                error={errors.username}
                />
             <Input name="password" value={data.password}
               label="Password"
               onChange={this.handleChange}
               error={errors.password}
               />
               {this.renderButton("Login")}
               </form>
            </div>
          );
        }
      }


      export default LoginForm;