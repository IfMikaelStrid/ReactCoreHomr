import React, { Component } from 'react';
import './src/about.css';

export class AboutSection extends Component {
    displayName = AboutSection.name

    render() {
        return (
            <div className="AboutFlex" >
                <div className="AboutHeader" >
                    About me
                </div>
                <div className="AboutBody">
                    Body lorem keblar kublar lirem lorem keblar kublar lorem keblar kublar lirem lorem keblar kubla rlorem keblar kublar lirem lorem keblar kublar lorem keblar kublar lirem lorem keblar kublar
                </div>
            </div>
        );
    }
}
