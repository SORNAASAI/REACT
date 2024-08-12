import React, { Component } from 'react';
class Togglemessage extends Component{
    constructor()
    {
        super();
        this.state={isVisible : false}

    }
    toggle=()=>
    {
        this.setState(
            prevState=>({
                isVisible : !prevState.isVisible
            }
            )
        )
    }
    render()
    {
        return(
            <div>
                <button onClick={this.toggle}>{this.state.isVisible ? 'Hide Component' : 'Show Component'}</button>
                {this.state.isVisible && <p>Hi How are You?</p>}
            </div>
        )
    }
}
export default Togglemessage;