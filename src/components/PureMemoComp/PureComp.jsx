import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() { 
        //prevstate + prevprops => should componentupdate...
        console.log('pure comp');

        return (
            <div>
                pure comp - {this.props.name}
            </div>
        );
    }
}
 
export default PureComp;