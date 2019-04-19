import React,{Component} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Navbar } from 'reactstrap';

export default class ProjectNav extends Component {
  render() {
    return (
      // <ListGroup>
      //   <ListGroupItem tag="a" href="#">프로젝트 개요</ListGroupItem>
      //   <ListGroupItem tag="a" href="#">개발 환경</ListGroupItem>
      //   <ListGroupItem tag="a" href="#">담당 역할</ListGroupItem>
      //   <ListGroupItem tag="a" href="#">프로젝트 상세</ListGroupItem>
      //   <ListGroupItem tag="a" href="#">프로젝트 결과</ListGroupItem>
      //   <ListGroupItem tag="a" href="#">결과 자료</ListGroupItem>
      // </ListGroup>
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
      <NavLink href="#">프로젝트 상세</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">프로젝트 결과</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">결과 자료</NavLink>
    </NavItem>
  </Nav>
</Navbar>
    );
  }
}