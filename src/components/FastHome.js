
import {useState, useEffect} from 'react';
import {useLocation, Navigate, Routes, Route, useNavigate} from 'react-router-dom'
import {v4} from 'uuid'

import {socket} from '../socket';

const FastHome = () => {
    const navigate = useNavigate();
    const [gameId, setGameId] = useState("")
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [username, setUsername] = useState("")

    useEffect(() => {
        setUsername(prompt('Enter your name: '))
        setShouldRedirect(true)
    }, []);

    useEffect(() => {
        if(shouldRedirect){
            socket.emit('createNewGame', username)
        }
    })
    

    return(
        shouldRedirect ? 
        navigate("/game/"+username, {
            state: {
                prevUrl: '/',
                username: username
            }
        })
        :
        <div className='home'>
            <h1>Szachy.pl</h1>
            <h2>Welcome {username}!</h2>
        </div>
        );
}
export default FastHome;
