import React from 'react';
import {Chess} from 'chess.js';

import Board from './Board'
import MovesTable from './MovesTable';
import TimerSection from './TimerSection';

import {useState} from 'react';

const Game = () => {
    const [turn, setTurn] = useState('w');
    const [record, setRecord] = useState(new Chess());

    return(
        <div className='app'>
            <MovesTable record={record}/>
            <Board setTurn={setTurn} setRecord={setRecord}/>
            <TimerSection turn={turn}/>
        </div>);
}
export default Game;