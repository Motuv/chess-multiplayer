import React from 'react';
import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

const LoginForm = () => {
    const history = useNavigate();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/login",{
                email, password
            })
            .then(res => {
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User has not signed up")
                }
            })
            .catch(e=>{
                alert("wrong details")
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div className='login'>
            <h1>Log in</h1>
            <form action="post">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='' id=''/>
                <br/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='' id=''/>
                <br/>
                <input type="submit" onClick={submit}/>
            </form>
            <br />
            <p>Or</p>
            <br/>
            <Link to="/signup">Sign up!</Link>
        </div>);
}
export default LoginForm;