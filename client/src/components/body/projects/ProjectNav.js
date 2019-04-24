import React,{Component} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Navbar } from 'reactstrap';

export default class ProjectNav extends Component {
  render() {
    return (
<Navbar fixed='top' color="white">
  <NavbarBrand>{this.props.title}</NavbarBrand>
  <Nav className="ml-auto">
    <NavItem>
      <NavLink href="#">프로젝트 개요</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">개발 환경</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">담당 역할</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">개발 내용 상세</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">관련 자료 및 링크</NavLink>
    </NavItem>
  </Nav>
</Navbar>
    );
  }
}