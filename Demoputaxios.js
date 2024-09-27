import React,{useState} from 'react';
import Axios from 'axios';
const Demoputaxios=()=>
{
    const[userId,setUserId]=useState('');
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const addNew=()=>
    {
        Axios.put('https://jsonplaceholder.typicode.com/users/'+userId,{name:name,email:email})
        .then(res=>console.log(res.data))
    }
    return(
        <>
        <h1>Put example</h1>
        <input type="text" value={userId} onChange={(e)=>(setUserId(e.target.value))}/><br />
        <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}/><br />
        <input type="email" value={email} onChange={(e)=>(setEmail(e.target.value))}/><br />
        <button onClick={addNew}>AddNew</button>
        
        </>
    )
}
export default Demoputaxios;