import React,{Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Sidebar extends Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroupItem tag="a" href="#">프로젝트 개요</ListGroupItem>
        <ListGroupItem tag="a" href="#">개발 환경</ListGroupItem>
        <ListGroupItem tag="a" href="#">담당 역할</ListGroupItem>
        <ListGroupItem tag="a" href="#">프로젝트 상세</ListGroupItem>
        <ListGroupItem tag="a" href="#">프로젝트 결과</ListGroupItem>
        <ListGroupItem tag="a" href="#">결과 자료</ListGroupItem>
      </ListGroup>
    );
  }
}