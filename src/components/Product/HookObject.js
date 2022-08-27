import { useState } from "react";

const HookObject = () => {
    const [user, setuser] = useState({firstname: "", lastname: ""});

    const changeHandler = (e) => {
        setuser({...user, firstname: e.target.value})
    };
    const LastnameHandler = (e) => {
        setuser({...user, lastname: e.target.value})
    };
    
    return ( 
        <form>
            <input type="text" value={user.firstname} onChange={changeHandler}></input>
            <h2>my name is - {user.firstname}</h2>
            <input type="text" value={user.lastname} onChange={LastnameHandler}></input>
            <h2>my lastname is - {user.lastname}</h2>
            <div>{JSON.stringify(user)}</div>
        </form>
     );
}
 
export default HookObject;