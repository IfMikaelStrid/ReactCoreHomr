import React, { Component } from 'react';
import './Home.css';

export class Vector extends Component {
    displayName = Vector.name

    componentDidMount() {
        const script = document.createElement("script");
        script.src = './src/script/Particles.js';
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="particle-container">
                <div id="particles-js"></div>
                <div className="centered">Hello</div>
            </div>
        );
    }
}
