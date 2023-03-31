import React from 'react';
import Clock from './Clock'
import Nick from './Nick'

import {useState, useEffect} from 'react';


const TimerSection = (props) => {
    const [activeWhite, setActiveWhite]=useState(true);
    const [activeBlack, setActiveBlack]=useState(false);
    
    useEffect(() => {if(props.turn ==='b'){ 
        setActiveBlack(true);
        setActiveWhite(false);
    }
    else{
        setActiveBlack(false);
        setActiveWhite(true);
    }})

    return(
        <div className="rightSideBar">
            <Nick nick="motuv"/>
            <Clock color={'black'} active={activeBlack}/>
            <Nick nick="ziomek"/>
            <Clock color={'white'} active={activeWhite}/>
        </div>);
}
export default TimerSection;