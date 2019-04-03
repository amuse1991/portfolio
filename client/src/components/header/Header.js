import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, 
        Dropdown, DropdownItem, DropdownToggle, DropdownMenu,} from "reactstrap";
import '../../static/css/header.css';
export default class Header extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){
        return(
            <div>
                <div className="header-div header-title">
                    <span className="nav-link">Yoonho Shin</span>
                </div>
                <div className="header-div header-nav">
                    <Nav>
                        <NavItem>
                            <Link className="nav-link" to="/">main</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/profile">profile</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/skills">skills</Link>
                        </NavItem>
                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                projects
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>스터디타임</DropdownItem>
                                <DropdownItem>인공위성 관제 모니터링 웹 서비스</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </div>
                <hr/>
            </div>

            
        );
    }
}