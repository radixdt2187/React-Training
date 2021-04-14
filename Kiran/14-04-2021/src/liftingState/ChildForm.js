import React, { useState } from 'react'


const ChildForm=props=>{
    const[name,setName]=useState('');
    const[list,setList]=useState([]);
    const handleUserChanges = event => {
        debugger
        setName(event.target.value);
        
      };
      const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        list.push({name})
        setList(list);
        props.handleUserChange(list,name);

      };


     
    return(
    <div>
 <form >
              <div className='username'>
                <label htmlFor="username">Name</label>
                <input type='text' value={name}  onChange={handleUserChanges}/>
                
              </div>
              <div className='submit'>
                <button onClick={handleSubmit} >Submit</button>
              </div>
            </form>
    </div>
    );
};

export default ChildForm;