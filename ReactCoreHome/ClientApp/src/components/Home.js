import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './Home.css';
export class Home extends Component {
    displayName = Home.name
    componentDidMount() {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
    }
    render() {
        return (
            <div className="main_container">
                <div data-relative-input="true" className="flex_container" id="scene">
                    <div data-depth="0.2" className="front_layer">My first Layer!</div>
                    <div data-depth="0.6" className="back_layer">My second Layer!</div>
                </div>
            </div>
        );
    }
}
