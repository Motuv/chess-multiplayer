import React from 'react';
import Parser from 'html-react-parser';

import { useGameContext, useGameUpdateContext } from '../context/GameContext';

const MovesTable = () => {
    const game = useGameContext()
    const record = game.pgn({maxWidth: 5, newline: '<br>'})
    return(
        <div className="leftSideBar">
            <h2>Moves</h2>
            <div className='moves'>
                {Parser(record)}
            </div>
        </div>);
}

export default MovesTable;