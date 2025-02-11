import React, { Component } from 'react'
 import Joi from 'joi-browser'
import Input from './input'
 

class Form extends Component{
state = {       
        data:{},
        errors:{}
};

validate=()=>{
    const options={abortEarly:false};
     const {error}=   Joi.validate(this.state.data,this.schema,options);
     if(!error) return null;
     const errors={};
     for(let item of error.details) errors[item.path[0]]=item.message;
     return errors;
    // const errors={};
    // const {data}=this.state;
    // if(data.username.trim()==='')
    // errors.username='UserName is required.';
    // if(data.password.trim()==='')
    // errors.password='Password is required.';
    // return Object.keys(errors).length===0?null:errors;
};


validateProperty=({name,value})=>{
    const obj={[name]:value};
    const schema={[name]:this.schema[name]};
    const {error} =Joi.validate(obj,schema);
    return error ? error.details[0].message: null;
 
        // if(name==='username'){
        //     if(value.trim()==='') return 'Username is required.';
        // }
        // if(name==='password'){
        //     if(value.trim()==='') return 'Password is required.';
        // }
}

handleSubmit=e=>{
    e.preventDefault();
    const errors =this.validate();
    console.log(errors);
    this.setState({errors:errors || {} });
    if(errors) return;
    this.doSumbit();
}

doSumbit=()=>{
    console.log("Submitted");

}


handleChange=({currentTarget:input})=>{
    debugger
    const errors={...this.state.errors};
    const errorMessage=this.validateProperty(input);
   
    if(errorMessage) errors[input.name]=errorMessage   ;
    
    else delete errors[input.name];

    const data={...this.state.data};
    data[input.name]=input.value;
    this.setState({data});
};

renderButton(label){
    return   <button  className="btn btn-primary">{label}</button>
}
renderInput(name,label,type="text"){
    const {data,errors}=this.state;
    <Input 
    type={type}
    name={name}
     value={data[name]}
    label={label}
    onChange={this.handleChange}
    error={errors[name]}
    />
}
}

export default Form;