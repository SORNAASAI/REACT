import React ,{Component}from 'react';
class Sample extends Component{
    constructor()
    {
        super();
        this.state={
            color:"Blue",
            name:"Sornaa"
        }
    }
render()
{
   return(
    <h1>Like {this.state.color} color and I am {this.state.name}</h1>
   )
}
}
export default Sample;