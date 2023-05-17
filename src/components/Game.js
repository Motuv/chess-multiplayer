import React from 'react';
import {useState, useEffect} from 'react';

import Board from './Board'
import MovesTable from './MovesTable';
import TimerSection from './TimerSection';
import { GameProvider } from '../context/GameContext';
import { useLocation, useParams } from "react-router-dom";

import {socket} from '../socket'

socket.emit('join-room', 1, message => {
    alert(message)
})


const Game = () => {
    const [turn, setTurn] = useState('w');
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [players, setPlayers] = useState([]);
    const [isFull, setIsFull] = useState(false);
    const [boardOrientation, setBoardOrientation] = useState('white')
    const [opponentSocketId, setOpponentSocketId] = useState('')
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        if(location.state !=  null){
            if(location.state.prevUrl === '/'){
                alert("Send this URL, to your friend: "+ window.location.href)
                socket.emit('playerJoinGame', {
                    gameId : params.gameid,
                    userName : location.state.username
                })
                setGameId(params.gameid)
            }
        }
        else{
            setUsername(prompt('Enter your name: '))
            setPlayers(players => [...players, username])
            setBoardOrientation('black')
            setGameId(params.gameid)
        }

        socket.on("playerJoinedRoom", statusUpdate => {
            console.log("A new player has joined the room! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
            setOpponentSocketId(statusUpdate.mySocketId)
        })
    }, []);
    
    useEffect(() => {
        if(username != ''){
            const idData = {
                gameId : gameId,
                userName : username
            }
            socket.emit('playerJoinGame', idData)
        }
    })

    return(
        <div className='app'>
            {
            gameId !== '' ? 
            <GameProvider>
                <MovesTable/>
                <Board setTurn={setTurn} boardOrientation={boardOrientation} gameId={gameId}/>
                <TimerSection turn={turn} gameStarted={gameStarted} players={players} boardOrientation={boardOrientation}/>
            </GameProvider>
            :
            <h2>Loading</h2>
            }
        </div>
        );
}
export default Game;