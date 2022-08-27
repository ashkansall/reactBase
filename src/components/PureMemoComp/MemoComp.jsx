import React from "react";

const MemoComp = (props) => {
    console.log('memo comps');
    return ( 
        <div>
            memo comp - {props.name}
        </div>
     );
}
 
export default React.memo(MemoComp);