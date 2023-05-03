import React from 'react';
import {Chess} from 'chess.js';

import Board from './Board'
import MovesTable from './MovesTable';
import TimerSection from './TimerSection';
import { GameProvider } from '../context/GameContext';

import {useState} from 'react';

import {io} from 'socket.io-client'

const socket = io("http://localhost:5000")

socket.on('connect', () => {
    console.log('You connected with id: '+ socket.id)
})

socket.emit('join-room', 1, message => {
    alert(message)
})

const Game = () => {
    const [turn, setTurn] = useState('w');

    return(
        <div className='app'>
            <GameProvider>
                <MovesTable/>
                <Board setTurn={setTurn} />
                <TimerSection  turn={turn}/>
            </GameProvider>
        </div>);
}
export default Game;