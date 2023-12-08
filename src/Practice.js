import React, { useState } from 'react'

const Practice = () => {

    const[tname,setName]=useState("");
    const [age,setAge]=useState("");
    const[store,setStore]=useState([]);

  return (
    <div className='Complete'>
        <div className='first'>
            <label for="Name"class="name">name:</label><br/>
            <input type="text" className='text-box' value={tname} onChange={(e)=>setName(e.target.value)} placeholder='Enter the input'/>
        </div>

        <div className='second'>
            <label for="Age" class="age">age:</label><br/>
            <input type="number" className='text-boxing'value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter the age'/>
        </div>

      
    </div>
  )
}

export default Practice
