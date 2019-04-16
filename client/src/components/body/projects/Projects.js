import React, { Component } from 'react';
import Template from "../../Template";
import {Element} from 'react-scroll';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../../../static/css/page-header.css';

export default class Projects extends Component{
    divStyle = {
        width:'100%',
        height:'100vh'
    };

    render(){
        return(
            <Element name="projects" className="element">
                <div style={this.divStyle}>
                    <Row>
                        <Col className="page-header">
                            <h1 className="page-title">PROJECTS</h1><br/>
                            <div className="page-title-bar center-block"></div>
                        </Col>
                    </Row>
                </div>
            </Element>
        )
    }
}