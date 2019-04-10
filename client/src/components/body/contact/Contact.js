import React, { Component } from 'react';
import {Element} from 'react-scroll';
import { Container, Row, Col,Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

export default class Contact extends Component{
    
    divStyle = {
        width:'100%',
        height:'100vh'
    };

    render(){
        return(
            <Element name="contact" className="element" style={this.divStyle}>
                <Container fluid>
                    <Row>
                        <Col className="page-header">
                            <h1>CONTACT</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>궁금한 점이 있으신가요?</h6>
                            <Form>
                                <FormGroup>
                                    {/* <Label for="senderEmail">Email</Label> */}
                                    <Input type="email" name="email" id="senderEmail" placeholder="Enter email" />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="title">Title</Label> */}
                                    <Input type="text" name="title" id="title" placeholder="Tltle" />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="message">Message</Label> */}
                                    <Input type="textarea" name="message" id="message" placeholder="Message" />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label for="exampleFile">File</Label> */}
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Element>
        )
    }
    
}