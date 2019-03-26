import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './src/Content/ContentBlockOne.css';
export class ContentBlockOne extends Component
{
    displayName = "Block"
    componentDidMount() {
        var scene = document.getElementById('ContentBlockScene');
        var parallaxInstance = new Parallax(scene);
    }
    render() {
        return (
            <div className='blockOneContainer' id='ContentBlockScene'>
                <div className='blockOneText' data-depth="0.1">Big Board</div>
                <div className='blockOneRightText'></div>
            </div>
        );
    }
}