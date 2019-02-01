import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './Home.css';
export class Home extends Component {
    displayName = Home.name
    componentDidMount() {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }
    render() {
        return (
            <div className="flex_container" id="scene">
                <div className="greeting_layer" data-depth="0.2" id="greetings_container">
                Mikael Strid .NET
            </div>
        </div>
        );
    }
}
