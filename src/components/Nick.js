import React from 'react';

import {useState} from 'react';

const Nick = (props) => {

    return(
        <div className='nick'>
            <p>{props.nick}</p>
        </div>);
}
export default Nick;