import { useState } from "react";
import axios from  'axios';
function Register() {
    const [username ,setUsername]= useState('');
    const [password , setPassword] = useState('');
    const [Email , setEmail]= useState('');
    const [ Name , setname]= useState('');

    function getHandler (setter){
        return function Handler(e){
            setter(e.target.value)
        }
    }
   
    function handleSubmit (e){
        
        e.preventDefault()
       
        axios.post('https://web-assessment.divar.ir/vl/blog/users' , {
            username,
            password,
            Email,
            title:Name
        }).then((response)=> {
            console.log({data: response.data});
        })
        console.log({username ,password,Email,Name});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>UserName:</p>
                <input value={username} onChange={getHandler(setUsername)} type='tex' placeholder="username.."></input>
            </label>
            <label>
                <p>PassWord:</p>
                <input value={password} onChange={getHandler(setPassword)} type='password' placeholder="password..."></input>
            </label>
            <label>
                <p>Email:</p>
                <input value={Email} onChange={getHandler(setEmail)} type='tex' placeholder="Email.."></input>
            </label>
            <label>
                <p>Name:</p>
                <input value={Name} onChange={getHandler(setname)} type='password' placeholder="Name.."></input>
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}

export default Register