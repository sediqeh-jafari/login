import { useState } from "react";
import axios from 'axios'
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernamOnchange(e) {
        setUsername(e.target.value)
    }
    function handlePasswordOnchange(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        axios.post('http://web-assessment.divar.ir/vl/blog/sessions', {
            username,
            password
        })
            .then(response => {
                console.log(response.data);
            })
        e.preventDefault()
        console.log({ username, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>UserName:</p>
                <input value={username} onChange={handleUsernamOnchange} type='tex' placeholder="username"></input>
            </label>
            <label>
                <p>PassWord:</p>
                <input value={password} onChange={handlePasswordOnchange} type='password' placeholder="password"></input>
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}


export default Login