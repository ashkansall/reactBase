import React, { useState, useContext, useReducer } from 'react';

const CounterContext = React.createContext(); // state
const CounterContextDispatcher = React.createContext(); // setState

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


const CounterProvider = ({children}) => {
    // const [count, setCount] = useState(4);
    const [count, dispatch] = useReducer(reducer, initialstate);
    return ( 
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={dispatch}>
                {children}
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
     );
}
 
export default CounterProvider;

export const useCount = () => {
    return useContext(CounterContext);
}

export const useCountActions = () => {
   return useContext(CounterContextDispatcher);

//    const addOne = () => {
//         setCount(prevCount => prevCount + 1);
//     }
//     const addFive = () => {
//         setCount(prevCount => prevCount + 5);
//     }
//     return{addFive, addOne};
}

