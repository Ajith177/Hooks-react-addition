import React, { useReducer } from 'react';

const initialstate = {
    num1: "",
    num2: "",
    add: "",
}

function reducer(state, action) {

    if (action.type === "inputA") {
        return {
            ...state,
            num1: action['payload']
        }
    }

    else if (action.type === "inputB") {
        return {
            ...state,
            num2: action['payload']
        }
    }

    // else if (action.type === "clear") {
    //     return {
    //         ...state,
    //         num1: "",
    //         num2: ""
    //     }
    // }

    else {
        return {
            ...state,
            add: action['payload']
        }
    }
}


const Practise_1 = () => {
    
    const [state, dispatch] = useReducer(reducer, initialstate)

    const handleAddButton = () => {
        dispatch({ type: "click", payload: state['num1'] + state['num2'] })

        // dispatch({ type: "clear" })
    }

    return (
        <div>
            <h3>USE-REDUCER IN ADDITION</h3>
            <p>{state.add}</p>
            <input type="number" onInput={(e) => dispatch({ type: "inputA", payload: parseInt(e.target.value) })} value={state.num1} placeholder="value-1" />
            <input type="number" onInput={(e) => dispatch({ type: "inputB", payload: parseInt(e.target.value) })} value={state.num2} placeholder="value-2" />
            <button onClick={() => handleAddButton()}>ADD-reduce</button>
        </div>
    )
}

export default Practise_1;
