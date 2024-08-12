import React from 'react';
class Changethestate extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"Varun",
            Age:"12"
        }
    }
    Changename=()=>
    {
        this.setState({
            name:"Arun"
        })

    }
    render()
    {
        return(
            <div>
                <h1>I am {this.state.name} and I like {this.state.Age} age.</h1>
                <button onClick={this.Changename}>Change Name</button>
            </div>
        )
    }
}
export default Changethestate;