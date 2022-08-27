import { useState } from "react";

const HookCounter = () => {
    const [count, setcount] = useState(0);
    const addOneHandler = () => {
        console.log(count);
        setcount(prevcount => prevcount + 1);
    }
    const addTwoHandler = () => {
        setcount(prevcount => prevcount + 2);
    }
    const addFiveHandler = () => {
        for (let i = 0; i < 5; i++) {
            console.log(count);
            setcount(prevcount => {
                return prevcount + 1;
            });
        }
    }
    return ( 
        <div>
            <h2>count - {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTwoHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button>
        </div>
     );
}
 
export default HookCounter;