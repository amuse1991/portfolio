import React, { Component } from 'react';
import Template from "../../Template";
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';
import Header from '../../header/Header';
import { Link, Element } from "react-scroll";
import Profile from "../elements/Profile";
import Projects from "../elements/Projects";

export default class Main extends Component{
    render(){
        return(
            <Container fluid>
                {/* header */}
                <Row className="header">
                    <Col>
                        <Header projects={projects}/>
                    </Col>
                </Row>

                {/* body */}
                <Row className="body home">
                    <Col></Col>
                </Row>
                <Row className="body profile">
                    <Col>
                        <Profile/>
                    </Col>
                </Row>
                <Row className="body projects">
                    <Col>
                        <Projects/>
                    </Col>
                </Row>
                <Row className="body contact">
                    <Col></Col>
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