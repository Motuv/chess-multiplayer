import React, { useState } from 'react';
import {useLocation, Navigate, Routes, Route} from 'react-router-dom'
import {v4} from 'uuid'

import {socket} from '../socket';

const Home = () => {
    const location=useLocation()
    const [gameId, setGameId] = useState("")
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const send = () => {
        const newGameRoomId = v4()
        setGameId(newGameRoomId)
        socket.emit('createNewGame', newGameRoomId)
        setShouldRedirect(true)
    }

    if(location.state != undefined){
        return(
            <div className='home'>
                <h1>Szachy.pl</h1>
                <h2>Welcome home {location.state.id}!</h2>
                {shouldRedirect ? <Navigate replace to={"/game/"+gameId}></Navigate>: <h3 onClick={send}>Play</h3>}
                <h3><a href="/signup">Log out!</a></h3>
            </div>
            );
        }
    else{
        return(
            <div className='home'>
                <h1>Szachy.pl</h1>
                <h2>Welcome!</h2>
                <h3><a href="/login">Log in!</a></h3>
                <h3><a href="/signup">Sign up!</a></h3>
                
            </div>
            );
        }
}
export default Home;

//<h3><Redirect to = {"/game/" + this.state.gameId}><button className="btn btn-success" style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px"}}>Start Game</button></Redirect></h3>
            