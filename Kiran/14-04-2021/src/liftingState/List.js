
// import React, { useState } from 'react'

const List = ({ list }) => (
    list.map((list, index) => (
   
     <li key={index.toString()}>{list}</li>
     
    ))
  );

  export default List;