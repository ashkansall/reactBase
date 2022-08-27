import WithCounter from "../HOC/withCount";

const ClickCounter = ({count, incrementCount, name}) => {
    console.log(name);
    
    return ( 
        <h2 onClick={incrementCount}>cliced {count} times</h2>
     );
}
 
export default WithCounter(ClickCounter, 5);