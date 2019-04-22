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
                <Header/>
                {/* body */}
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </Container>
        )
    }
}