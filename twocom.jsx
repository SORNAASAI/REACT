import React from 'react';
class College extends React.Component{
    render()
    {
        return(
            <h1>SKCET college</h1>
        )
    }
}
class Dept extends React.Component{
    render()
    {
        return(
            <div>
                <h1>department at</h1>
                <College/>
            </div>
        )

    }
}
export default Dept;