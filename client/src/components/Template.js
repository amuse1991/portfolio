import React, { Component } from "react";
import Header from './header/Header'
import { Container, Row, Col } from "reactstrap";

export default class Template extends Component {
    
  render(){

    const {body, projects} = this.props
    
    return(
      <Container>
        {/* header */}
        <Row className="header">
          <Col>
            <Header projects={projects}/>
          </Col>
        </Row>
          {/* body */}
        <Row className="body">
          <Col></Col>
        </Row>
        {/* footer */}
        <Row className="footer">
          <Col></Col>
        </Row>
      </Container>
    );
  }
}