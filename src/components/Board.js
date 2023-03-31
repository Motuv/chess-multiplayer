import React from 'react';

import {useState} from 'react';
import {Chessboard} from 'react-chessboard';
import {Chess} from 'chess.js';

const Board = (props) => {

    const [game, setGame] = useState(new Chess());
    const [orientation, setOrientation] = useState('white');

    const makeMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move);
        setGame(gameCopy);
        props.setRecord(gameCopy)
        if(gameCopy.isCheckmate()){
            alert(game.turn()+' won!');
        }
        else if(gameCopy.isDraw() || gameCopy.isStalemate() || gameCopy.isThreefoldRepetition()){
            alert('draw')
        }
    }

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
            alert(error);
            return false;
        }

        if(game.turn()==='b'){
            setOrientation('white');
            props.setTurn('w');
        }
        else{
            setOrientation('black');
            props.setTurn('b');
        }

        
        
        return true;
    }


  return <div className="mainContent">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} boardOrientation={orientation}/>      
    </div>;

}
export default Board;