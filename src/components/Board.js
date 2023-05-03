import React from 'react';

import {useState, useContext} from 'react';
import {Chessboard} from 'react-chessboard';
import {Chess} from 'chess.js';
import { useNavigate, Link } from 'react-router-dom';
import { useGameContext, useGameUpdateContext } from '../context/GameContext';

const Board = (props) => {

    const game = useGameContext();
    const makeMove = useGameUpdateContext();
    
    const onDrop = (startSquare, endSquare) => {
        try{
            const move = makeMove({
                from: startSquare,
                to: endSquare,
            });
            if(move === null){ 
                return false;
            }  
        }
        catch(error){
            return false;
        }

        if(game.turn()==='b'){
            props.setTurn('w');
        }
        else{
            props.setTurn('b');
        }

        return true;
    }


  return <div className="mainContent">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} boardOrientation={'white'}/>      
    </div>;

}
export default Board;