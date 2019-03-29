import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './src/Content/css/MontyHall.css';
import fullMonty from './src/Content/Images/Monty.png';
import door1 from './src/Content/Images/door1.png';
import door2 from './src/Content/Images/door2.png';
import door3 from './src/Content/Images/door3.png';

export class MontyHallContainer extends Component {
    displayName = "MontyHall"
    componentDidMount() {
        var scene = document.getElementById('MontyScene');
        var parallaxInstance = new Parallax(scene);
    }

    render() {

        return (
            <div className='MontyContainer' id='MontyScene'>
                <div className='MontyFlexContainer'>
                    <div className='MontyDoor' id='door1'>
                        <img src={door1} alt="door1" id='doorimg'/>
                    </div>
                    <div className='MontyDoor' id='door2'>
                        <img src={door2} alt="door2" id='doorimg'/>
                    </div>
                    <div className='MontyDoor' id='door3'>
                        <img src={door3} alt="door3" id='doorimg'/>
                    </div>
                    <div className='MontyHimself' >
                        <img src={fullMonty} alt="Monty"/>
                    </div>
                </div>
            </div>
        );
    }
}