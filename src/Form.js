import React ,{useEffect, useReducer,useState}from 'react'
import './App.css';
export const Form = () => {
    const initialValue={name:"",age:null}

    const reducer=(state,action)=>{
        switch(action.type){

            case "ADD":
                {
                    return(
                        {name:action.payload.name,age:action.payload.age}
                    )
                }
            case "RESET":{
                
                return(
                    {name:action.payload.name,age:action.payload.age})
            }
        }
    }
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [state,dispatch]=useReducer(reducer,initialValue)

    function displayData(e){
        e.preventDefault();
        dispatch({type:"ADD",payload:{name:name , age:age}})
        setName("")
        setAge("");
    }
    function resetData(e){
        e.preventDefault();
        dispatch({type:"RESET",payload:{name:"",age:null}})
        setName("")
        setAge("");
    }
  return (
    <>
        <div className="formDiv">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  <div className="mb-4">
    <label htmlForfor="exampleInputPassword1" className="form-label1">Age:</label>
    <input type="number" className="form-control1"  value={age} onChange={(e)=>setAge(e.target.value)} />
  </div>
  <button class="adding" onClick={displayData} >Add</button>
  <button class="reseting" onClick={resetData}>Reset</button>
</form>
    </div>
    <div>
        <p>{state.name}</p>
        <p>{state.age}</p>
    </div>
    </>
  )
}
export default Form