import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './src/Content/css/MontyHall.css';
import fullMonty from './src/Content/Images/Monty.png';

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
                        <div className='MontyDoorKnob'></div>
                    </div>
                    <div className='MontyDoor' id='door2'>
                        <div className='MontyDoorKnob'></div>
                    </div>
                    <div className='MontyDoor' id='door3'>
                        <div className='MontyDoorKnob'></div>
                    </div>
                    <div className='MontyHimself' >
                        <img src={fullMonty} alt="Monty"/>
                    </div>
                </div>
            </div>
        );
    }
}