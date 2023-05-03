import React, { useContext } from 'react';

import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Chess} from 'chess.js';

const GameContext = React.createContext()
const GameUpdateContext = React.createContext();

export function useGameContext(){
    return useContext(GameContext)
}

export function useGameUpdateContext(){
    return useContext(GameUpdateContext)
}

export function GameProvider({children}){
    const history = useNavigate();

    const [game, setGame] = useState(new Chess());

    const makeMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move);
        setGame(gameCopy);
        if(gameCopy.isCheckmate()){
            alert(game.turn()+' won!');
            history("/home")
        }
        else if(gameCopy.isDraw() || gameCopy.isStalemate() || gameCopy.isThreefoldRepetition()){
            alert('draw')
            history("/home")
        }
    }

    return (
        <GameContext.Provider value={game}>
            <GameUpdateContext.Provider value={makeMove}>
                {children}
            </GameUpdateContext.Provider>
        </GameContext.Provider>
    )
}