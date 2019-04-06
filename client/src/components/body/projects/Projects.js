import React, { Component } from 'react';
import Template from "../../Template";
import {Element} from 'react-scroll';

export default class Projects extends Component{
    divStyle = {
        backgroundColor:'green',
        width:'100vw',
        height:'100vh'
    };

    render(){
        return(
            <Element name="projects" className="element">
                <div style={this.divStyle}>
                   projects
                </div>
            </Element>
        )
    }
}