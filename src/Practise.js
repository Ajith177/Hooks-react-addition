import React,{useState} from 'react'

const Practise = () => {
    const [state,setState]=useState(0);
    const[state_1,setState_1]=useState(0);
    const [complete,setComplete]=useState(0);

    function Click(){
        setComplete(parseInt(state)+parseInt(state_1));
    }

  return (
    <div>
      <h3> USE-STATE IN ADDITION</h3>
      <p>{complete}</p><br/>
      <input type="number" value={state}  onChange={(e)=>setState(e.target.value)} placeholder="value-1"/><br/>
      <input type="number" value={state_1}  onChange={(e)=>setState_1(e.target.value)} placeholder="value-2"/><br/>
      <button onClick={Click}>ADD</button>
    </div>
  )
}

export default Practise
