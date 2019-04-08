import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class Contact extends Component{
    
    divStyle = {
        width:'100vw',
        height:'100vh'
    };

    render(){
        return(
            <Element name="contact" className="element">
                <div style={this.divStyle}>
                    contact
                </div>
            </Element>
        )
    }
    
}