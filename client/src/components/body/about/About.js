import React, { Component } from 'react';
import { Container, Row, Col, 
        ListGroup, ListGroupItem } from "reactstrap";
import {Element} from 'react-scroll';

import "../../../static/css/profile.css";
import '../../../static/css/page-header.css';

import Template from "../../Template";
import Skills from "./Skills";
import Intro from "./Intro";

export default class About extends Component{
    divStyle = {
        width:'100%',
        height:'100vh',
    };

    render(){
        return(
            <Element name="about" className="element" style={this.divStyle}>
                    <Row>
                        <Col className="page-header">
                            <h1 className="page-title">ABOUT</h1><br/>
                            <div className="page-title-bar center-block"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Intro/>
                        </Col>
                        <Col className="skills">
                            <Skills/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="keywords">
                        </Col>
                    </Row>
            </Element>
            
        )
    }
}