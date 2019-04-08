import React, { Component } from 'react';
import {Element} from 'react-scroll';
import { Button } from 'reactstrap';
import {Link} from "react-scroll";
import '../../../static/css/home.css';


export default class Home extends Component{
    render(){
        return(
            <Element name="home" className="element">
                <div className="home-jumbotron" style={this.divStyle}>
                    <h1 className="title">Hello, I'm <strong>Yoonho Shin</strong>. <br/>
                    I'm backend web developer.</h1>
                    <Link className="nav-link" to="about" spy={true} smooth={true}
                        offset={-50} duration={500} onSetActive={this.handleSetActive}>
                        <Button color="primary" size="lg">View my work</Button>
                    </Link>    
                </div>
            </Element>
        )
    }
}