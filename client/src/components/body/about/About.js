import React, { Component } from 'react';
import Template from "../../Template";
import { Container, Row, Col, 
        ListGroup, ListGroupItem } from "reactstrap";
import "../../../static/css/profile.css";
import photo from "../../../static/images/logo.svg"
import {Element} from 'react-scroll';

export default class About extends Component{
    divStyle = {
        width:'100vw',
        height:'100vh'
    };

    render(){
        return(
            <Element name="about" className="element">
                <div style={this.divStyle}>
                    profile
                </div>
            </Element>
            
        )
    }
}