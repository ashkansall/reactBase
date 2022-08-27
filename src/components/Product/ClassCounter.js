import React, { Component } from 'react';
class CounterClass extends Component {
    state = { 
        count:0
     } 
     addOneHandler = () => {
         this.setState((prevstate) => {
             return {count: prevstate.count + 1}
         });
     }
    render() { 
        return (
            <div>
                 <h2>count - {this.state.count}</h2>
                <button onClick={this.addOneHandler}>add one</button>
            </div>
        );
    }
}
 
export default CounterClass;