import React from 'react';
import Clock from './Clock'
import Nick from './Nick'

import {useState, useEffect} from 'react';


const TimerSection = (props) => {
    const [activeWhite, setActiveWhite]=useState(false);
    const [activeBlack, setActiveBlack]=useState(false);
    const [whiteNick, setWhiteNick] = useState("")
    const [blackNick, setBlackNick] = useState("")
    
    useEffect(() => {    
    if(props.turn ==='b'){ 
        setActiveBlack(true);
        setActiveWhite(false);
    }
    else{
        setActiveBlack(false);
        setActiveWhite(true);
    }
})
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
            ).then(
                data => {
                setWhiteNick(data["white"]) 
                setBlackNick(data["black"])
            }
            )
    }, [])

    return(
        <div className="rightSideBar">
            <Nick nick={(typeof whiteNick === 'undefined') ? ("loading"): (whiteNick)}/>
            <Clock color={'black'} active={activeBlack}/>
            <Nick nick={(typeof blackNick === 'undefined') ? ("loading"): (blackNick)}/>
            <Clock color={'white'} active={activeWhite}/>
        </div>);
}
export default TimerSection;