import React, { Component } from "react";
import { Nav, NavItem, NavLink, 
        Dropdown, DropdownItem, DropdownToggle, DropdownMenu,} from "reactstrap";

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
                <Nav>
                    <NavItem>
                        YoonhoShin
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">main</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">skills</NavLink>
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
        );
    }
}