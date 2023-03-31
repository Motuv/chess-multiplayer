import React from 'react';

import {useState, useEffect} from 'react';

const Clock = (props) => {
    const [seconds, setSeconds] = useState(300);

    useEffect(
        () => {
            if(props.active === true){
                setTimeout(() => setSeconds(seconds-1), 1000)
            }
            else{
                setSeconds(seconds);
            }
        });
    

    return(
        <div className={props.color}>
            <div className={props.color, 'timer'}>
                <p>{props.color} {parseInt(seconds/60)}: {seconds%60}</p>
            </div>
        </div>);
}
export default Clock;