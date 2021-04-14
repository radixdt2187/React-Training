import React, { useState } from 'react'
import ChildForm from './ChildForm';
import List from './List';



const ParentForm=()=>
{
    const[name,setName]=useState('');
    const[list,setList]=useState([]);

    const handleUserChange = (list,name) => {
        debugger
        setName(name);
        setList(list);  

      };
     
    return(
<div className="card">
  
<ChildForm  handleUserChange={handleUserChange}/>
<div className="List_Name">    Person List
{list.map((item,index) => {
       return <div key={index}>{item.name}</div>;
     })}

</div>

</div>
);
};

export default ParentForm;