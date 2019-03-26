import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './src/Content/ContentBlockOne.css';
export class MontyHallContainer extends Component {
    displayName = "MontyHall"
    componentDidMount() {
        var scene = document.getElementById('MontyScene');
        var parallaxInstance = new Parallax(scene);
    }
    render() {
        return (
            <div>MONTY HALL TITLE</div>
            <div className='blockOneContainer' id='MontyScene'>
                <div data-depth="0.1">Monty hall text</div>
                <div className='blockOneRightText'></div>
            </div>
        );
    }
}