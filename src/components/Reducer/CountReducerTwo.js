import React, { useState, useReducer } from 'react';


// const initialstate = 0;

const initialstate = 0;

const reducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'add':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}

const CounterOne = () => {
    // const [count, setCount] = useState(0);

    // 1. usestate managment and update
    // 2. reduce handlers

    // steps
    // 1. import usereducer()
    //  2. usereducer(reducer func, initialstate = 0)
    //  3. return array : [count, dispatch]
    //  4. reducer(state, actions)

    const [count, dispatch] = useReducer(reducer, initialstate);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);

    // state => {}
    // action => {}
    
    // const addOne = () => {
    //     setCount(prevCount => prevCount + 1);
    // }
    // const addFive = () => {
    //     setCount(prevCount => prevCount + 5);
    // }
    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1);
    // }

  
    return ( 
        <div>
            <h2>count one is : {count}</h2>
            <div>
                <button onClick={() => dispatch({type: "add", value: 5})}>add five</button>
                <button onClick={() => dispatch({type : "decrement", value: 1})}>decrement</button>
                <button onClick={() => dispatch({type : "reset"})}>reset</button>
            </div>
            <h2>count two is : {countTwo}</h2>
            <div>
                <button onClick={() => dispatchTwo({type: "add", value: 5})}>add five</button>
                <button onClick={() => dispatchTwo({type : "decrement", value: 1})}>decrement</button>
                <button onClick={() => dispatchTwo({type : "reset"})}>reset</button>
            </div>
        </div>
     );
}
 
export default CounterOne;