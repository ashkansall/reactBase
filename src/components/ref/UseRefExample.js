import { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
    const [inputVlue, setInputValue] = useState("");
    const previousValue = useRef();
    const [count, setCount] = useState(0);
    const previousCount = useRef();

    // const resrtHandler = () => {
    //     setInputValue("");
    //     inputRef.current.focus();
    // }
    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        previousValue.current = inputVlue;
    }, [inputVlue])

    useEffect(() => {
        previousCount.current = count;
    }, [count])

    return ( 
        <div>
            <input type="text" value={inputVlue} onChange={changeHandler}></input>
            {/* <button onClick={resrtHandler}>reset</button> */}
            <p>my name is {inputVlue} and it used to be {previousValue.current}</p>
            <div>
            <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>generate random</button>
            </div>
            <div>
            count is {count}
            </div>
            <div>previous count is {previousCount.current}</div>
        </div>
        
     );
}
 
export default UseRefExample;