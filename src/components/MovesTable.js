import React from 'react';


const MovesTable = (props) => {

    return(
        <div className="leftSideBar">
            <h2>Moves</h2>
            <div className='moves'>
                {props.record.pgn({maxWidth: 5, newline: '</br>'}).replace('\'','')}
            </div>
        </div>);
}

export default MovesTable;