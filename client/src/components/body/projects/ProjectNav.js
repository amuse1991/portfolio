import React,{Component} from 'react';
import { Link } from "react-scroll";
import { NavbarBrand, Nav, NavItem, NavLink, Navbar } from 'reactstrap';

export default class ProjectNav extends Component {
  render() {
    return (
<Navbar fixed='top' color="white">
  <NavbarBrand>{this.props.title}</NavbarBrand>
  <Nav className="ml-auto">
    <NavItem>
      <Link className="nav-link" to="summary" spy={true} smooth={true}
                                  offset={5} duration={500} onSetActive={this.handleSetActive}>
                                  프로젝트 개요
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="devInv" spy={true} smooth={true}
                                  offset={5} duration={500} onSetActive={this.handleSetActive}>
                                  개발환경
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="role" spy={true} smooth={true}
                                offset={5} duration={500} onSetActive={this.handleSetActive}>
                                담당역할
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="link" spy={true} smooth={true}
                                offset={5} duration={500} onSetActive={this.handleSetActive}>
                                관련 자료 및 링크
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="detail" spy={true} smooth={true}
                                  offset={5} duration={500} onSetActive={this.handleSetActive}>
                                  개발 내용 상세
      </Link>
    </NavItem>
  </Nav>
</Navbar>
    );
  }
}