import React from 'react';
import {Chessboard} from 'react-chessboard';
import { useGameContext, useGameUpdateContext } from '../context/GameContext';

import {io} from 'socket.io-client'
import { useEffect,useState } from 'react';

import {socket} from '../socket'

const Board = (props) => {

    const game = useGameContext();
    const makeMove = useGameUpdateContext();
    const [color, setColor] = useState('w');

    useEffect(() => {
        if(props.boardOrientation === 'white'){
            setColor('w')
        }
        else{
            setColor('b')
        }
    },[])

    useEffect(() => {
        

        socket.on('opponent move', (move) => {
            try{
                const newmove = makeMove({
                    from: move.from,
                    to: move.to,
                });

                if(newmove === null){ 
                    return false;
                }
            }
            catch(error){
                return false;
            }
        })
    })
    
    const onDrop = (startSquare, endSquare) => {
        if(game.turn() === color){
            const moveData = {
                gameId: props.gameId,
                from: startSquare,
                to: endSquare
            }
            console.log(moveData)
            socket.emit('new move', moveData)
        }
    }


  return <div className="mainContent">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} boardOrientation={props.boardOrientation}/>      
    </div>;

}
export default Board;