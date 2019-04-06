import React, { Component } from 'react';
// import Template from "../../Template";
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';
import { Link, Element } from "react-scroll";
import Header from '../header/Header';
import Home from "../body/home/Home";
import About from "../body/about/About";
import Projects from "../body/projects/Projects";
import Contact from "../body/contact/Contact";

export default class Main extends Component{
    render(){
        return(
            <Container fluid>
                {/* header */}
                <Row className="header">
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                {/* body */}
                <Row className="body home">
                    <Col>
                        <Home/>
                    </Col>
                </Row>
                <Row className="body profile">
                    <Col>
                        <About/>
                    </Col>
                </Row>
                <Row className="body projects">
                    <Col>
                        <Projects/>
                    </Col>
                </Row>
                <Row className="body contact">
                    <Col>
                        <Contact/>
                    </Col>
                </Row>
                {/* footer */}
                <Row className="footer">
                    <Col>
                    </Col>
                </Row>
      </Container>
        )
    }
}