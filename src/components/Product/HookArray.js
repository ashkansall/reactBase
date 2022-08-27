import { useState } from "react";

const HookArray = () => {
    const [item, setitem] = useState([]);
    const addItemHandler = () => {
        
        // setitem => array?
        setitem([...item, {id: item.length, number: Math.floor(Math.random()* 10)}])
    }
    return ( 
        <div>
            <button onClick={addItemHandler}>add item</button>
            {item.map(item => {
                return <li key={item.id}>{item.number}</li>
            })}
        </div>
     );
}
 
export default HookArray;