import React from 'react';
import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const history = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nick, setNick] = useState("")

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email, password, nick
            }).then(res => {
                if(res.data==="exist"){
                    alert("User already exist")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div className='register'>
            <h1>Sign up</h1>
            <form action="post">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='' id=''/>
                <br/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='' id=''/>
                <br/>
                <input type="text" onChange={(e)=>{setNick(e.target.value)}} placeholder='Nick' name='' id=''/>
                <br/>
                <input type="submit" onClick={submit}/>
            </form>
            <br />
            <p>Or</p>
            <br/>
            <Link to="/login">Login!</Link>
        </div>);
}
export default LoginForm;