import React, { Component, PureComponent } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends PureComponent{
    state = { 
        name: "ash",
     } 

    componentDidMount() {
        setInterval(() => {
            this.setState({name: "ash"})
        }, 1000);
    }

    render() { 
        console.log('parent comp--------------------------------');
        return (
            <div>
                parent component
                <RegComp name={this.state.name}/>
                {/* <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}
 
export default ParentComp;