import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { Greeting } from './Greeting.js';
import { ThreeSnowHouse } from './ThreeSnowHouse.js';
import { ContentBlockOne } from './ContentBlockOne.js';
import './Home.css';

export class Home extends Component
{
    displayName = Home.name
    componentDidMount() {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }
    render() {
        return (
            <div>
                <Greeting />
                <ContentBlockOne />
            </div>
        );
    }
}
