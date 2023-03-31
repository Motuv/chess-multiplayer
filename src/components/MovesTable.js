import React from 'react';
import Parser from 'html-react-parser';

const MovesTable = (props) => {
    const record = props.record.pgn({maxWidth: 5, newline: '<br>'})
    return(
        <div className="leftSideBar">
            <h2>Moves</h2>
            <div className='moves'>
                {Parser(record)}
            </div>
        </div>);
}

export default MovesTable;