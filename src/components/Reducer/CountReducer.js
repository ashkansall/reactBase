import React, { useState, useReducer } from 'react';


// const initialstate = 0;

const initialstate = {
    firstCounter: 0,
    secondCounter: 0,
}
const reducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'add':
            return {...state, firstCounter : state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - action.value};
        case 'add2':
            return {...state, secondCounter : state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter : state.secondCounter - action.value};
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
            <h2>count one is : {count.firstCounter}</h2>
            <h2>count two is : {count.secondCounter}</h2>
            <button onClick={() => dispatch({type: "add", value: 1})}>add one</button>
            <button onClick={() => dispatch({type : "decrement", value: 1})}>decrement</button>
            <button onClick={() => dispatch({type: "add2", value: 5})}>add five</button>
            <button onClick={() => dispatch({type : "decrement2", value: 1})}>decrement2</button>
            <button onClick={() => dispatch({type : "reset"})}>reset</button>
        </div>
     );
}
 
export default CounterOne;