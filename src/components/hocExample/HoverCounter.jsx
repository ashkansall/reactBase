import WithCounter from "../HOC/withCount";

const HoverCounter = ({count, incrementCount}) => {
    
    return ( 
        <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
     );
}
 
export default WithCounter(HoverCounter, 10);