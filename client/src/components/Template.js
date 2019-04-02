import react, { Component } from "react";
import Header from './header/Header'
import { Container, Row, Col } from "reactstrap";

class Template extends Component {
    render(){
      return(
        <Container>
          {/* header */}
          <Row className="header">
            <Col>
              <Header/>
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