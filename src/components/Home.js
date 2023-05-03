import React from 'react';
import {useLocation} from 'react-router-dom'

//import {useState} from 'react';

const Home = () => {
    const location=useLocation()
    if(location.state != undefined){
    return(
        <div className='home'>
            <h1>Szachy.pl</h1>
            <h2>Welcome home {location.state.id}!</h2>
            <h3><a href="/game">Play</a></h3>
            <h3><a href="/signup">Log out!</a></h3>
            
        </div>
        );
    }
    else{
        return(
            <div className='home'>
                <h1>Szachy.pl</h1>
                <h2>Welcome!</h2>
                <h3><a href="/login">Log in!</a></h3>
                <h3><a href="/signup">Sign up!</a></h3>
                
            </div>
            );
    }
}
export default Home;