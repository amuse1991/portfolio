import React, { Component } from 'react';
import {Element} from 'react-scroll';
import { Container, Row, Col,Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import ContactItem from "./ContactItem"
import '../../../static/css/page-header.css';
import "../../../static/css/contact.css"

export default class Contact extends Component{
    
    divStyle = {
        width:'100%',
        height:'100vh'
    };
    render(){
        return(
            <Element name="contact" className="element" style={this.divStyle}>
                    <Row>
                        <Col className="page-header">
                            <h1 className="page-title">CONTACT</h1><br/>
                            <div className="page-title-bar center-block"></div>
                        </Col>
                    </Row>
                    <Row className="contacts-row">
                        <Col className="text-center">
                            <p className="contact-text"> 
                                포트폴리오를 읽어 주셔서 감사합니다! <br/>
                                궁금하신 사항이 있다면 언제든 오른쪽 연락처로 연락해 주세요!
                            </p>
                        </Col>
                        <Col className="contacts-itmes">
                            <ContactItem title="Mobile" imgName="smartphone.png" content="010-6258-1441"/>
                            <ContactItem title="Email" imgName="email.png" content="amuse1991@gmail.com"/>
                            <ContactItem title="Blog" imgName="tistory.svg" content="https://yoonho-devlog.tistory.com"/>
                            <ContactItem title="Github" imgName="github-logo.svg" content="https://github.com/amuse1991"/>
                        </Col>
                        
                    </Row>
                    
                    <div className="text-center contact-footer">
                        Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"  title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a><br/>
                        Yoonho Shin ©2019
                    </div>
            </Element>
        )
    }
    
}