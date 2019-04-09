import React, { Component } from 'react';
import Template from "../../Template";
import { Container, Row, Col, 
        ListGroup, ListGroupItem } from "reactstrap";
import "../../../static/css/profile.css";
import photo from "../../../static/images/logo.svg"
import {Element} from 'react-scroll';
import '../../../static/css/page-header.css';

export default class About extends Component{
    divStyle = {
        width:'100%',
        height:'100vh',
    };

    render(){
        return(
            <Element name="about" className="element" style={this.divStyle}>
                <Container fluid>
                    <Row>
                        <Col className="page-header">
                            <h1 className="page-title">ABOUT</h1>
                            <div className="page-title-bar"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="profile">
                        </Col>
                        <Col className="skills">
                        </Col>
                    </Row>
                    <Row>
                        <Col className="keywords">
                        </Col>
                    </Row>
                </Container>
            </Element>
            
        )
    }
}