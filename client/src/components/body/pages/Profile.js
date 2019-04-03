import React, { Component } from 'react';
import Template from "../../Template";
import { Container, Row, Col, 
        ListGroup, ListGroupItem } from "reactstrap";
import "../../../static/css/profile.css";
import photo from "../../../static/images/logo.svg"

export default class Profile extends Component{
    render(){
        return(
            <Template>
                <Container fluid className="profile-container">
                    <Row>
                        <Col className="profile-title">
                            <span>Profile</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="photo">
                            <img src={photo}/>
                        </Col>
                        <Col className="contact">
                            <ListGroup flush>
                                <ListGroupItem>신윤호</ListGroupItem>
                                <ListGroupItem>010-6258-1441</ListGroupItem>
                                <ListGroupItem>amuse1991@gmail.com</ListGroupItem>
                                <ListGroupItem>https://yoonho-devlog.tistory.com/</ListGroupItem>
                                <ListGroupItem> https://github.com/amuse1991</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Template>
            
        )
    }
}