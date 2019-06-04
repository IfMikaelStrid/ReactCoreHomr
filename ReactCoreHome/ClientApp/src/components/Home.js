import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { Greeting } from './Greeting.js';
import { AboutSection } from './aboutsection.js';
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
                <div className="flex_background">
                    <Greeting />
                </div>

            </div>
        );
    }
}
