import React,{Component} from 'react';
class ControlledComponent extends React.Component
{
    constructor(props)
    {
            super(props);
            this.state={
            name:"reena",address:"ahmedabad",stateinfo:"",gender:"",hobbies:[],
            selectedhobbies:""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  handleInputChange(event)
    {
        const target=event.target;
        const value=target.value;
        const name=target.name;
        console.log(target.name);
        if(target.name=="hobbies")
        {
            this.setState.selectedhobbies+=target.value+",";
        }
        else{
	//this.setState(name:value)//single property assign
        this.setState({[name]:value})//multiple property assign
}}

 handleSubmit(event)
    {
        event.preventDefault();
        var message="";
      for(var i=0;i<this.state.hobbies.length;i++)
      {
         message+=this.state.hobbies[i]+" ";
      }
      console.log(message);
        alert(this.state.name+"  "+this.state.address+" "+this.state.stateinfo+" "+
this.state.gender+this.state.selectedhobbies);
    }
    render()
    {
        return( 

    <div className='wrapper card'>
    <div className='form-wrapper'>
     <form className="form-control" onSubmit={this.handleSubmit}>
       Name <input type="text" name="name" value={this.state.name}
 onChange={this.handleInputChange} />
               
                <label>
                Address 
  </label>
                <textarea name="address" value={this.state.address} onChange={this.handleInputChange} />
              
               
<select name="stateinfo"  value={this.state.stateinfo} onChange={this.handleInputChange}>
                        <option value="Ahmedabad">Ahmedabad</option>
                         <option selected value="Mumbai">Mumbai</option>
                         <option selected value="Delhi">Delhi</option>
                         <option value="Chennai">Chennai</option>
                        </select>
             
                <label>
                Gender
</label>
                    <input name="gender" type="radio" value="Male" onChange={this.handleInputChange}/>Male
                    <input name="gender" type="radio" value="Female"onChange={this.handleInputChange}/>Female
                
                <label>
                    Hobbies
 </label>
                    <input name="hobbies" type="checkbox" value="0" onChange={this.handleInputChange}/>Hockey
                    <input name="hobbies" type="checkbox" value="1" onChange={this.handleInputChange}/>Cricket
                    <input name="hobbies" type="checkbox" value="2" onChange={this.handleInputChange}/>Badminton
               
                <input type="submit" value="Submit" />
                </form>
    </div>
  </div>
           
            
        );
    }
}
export default ControlledComponent;