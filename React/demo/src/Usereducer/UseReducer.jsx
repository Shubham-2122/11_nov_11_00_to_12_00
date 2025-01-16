import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header';

// useState :- normal logic not hadnle for big app
// useReducer :- complex logic trigger / coman data / Reducer Repeted code coman logic will use
// intal state , reducer , dispatch

let initalstate = 0;

export function reducer(state, action) {

    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrment':
            return state - 1;
        case 'zero':
            return initalstate;
        default:
            return state
    }

}



function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initalstate)


    return (

        <div>
            <Header />
            <h1>Hello count :- {count}</h1>
            <button className='btn btn-success' onClick={()=>dispatch('increment')}>Incement</button>
            <button className='btn btn-danger' onClick={()=>dispatch('decrment')}>Decement</button>
            <button className='btn btn-primary' onClick={()=>dispatch('zero')}>Decement</button>
        </div>
    )
}

export default UseReducer
