import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
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
                            <Link className="nav-link" to="/" spy={true} smooth={true}>HOME</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/profile">ABOUT</Link>
                        </NavItem>
                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                PROJECTS
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>스터디타임</DropdownItem>
                                <DropdownItem>인공위성 관제 모니터링 웹 서비스</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <Link className="nav-link" to="/skills">CONTACT</Link>
                        </NavItem>
                    </Nav>
                </div>
                <hr/>
            </div>

            
        );
    }

    // render(){
    //     return(
    //         <div>
    //             <div className="header-div header-title">
    //                 <span className="nav-link">Yoonho Shin</span>
    //             </div>
    //             <div className="header-div header-nav">
    //                 <Nav>
    //                     <NavItem>
    //                         <Link className="nav-link" to="/">HOME</Link>
    //                     </NavItem>
    //                     <NavItem>
    //                         <Link className="nav-link" to="/profile">ABOUT</Link>
    //                     </NavItem>
    //                     <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    //                         <DropdownToggle nav caret>
    //                             PROJECTS
    //                         </DropdownToggle>
    //                         <DropdownMenu>
    //                             <DropdownItem>스터디타임</DropdownItem>
    //                             <DropdownItem>인공위성 관제 모니터링 웹 서비스</DropdownItem>
    //                         </DropdownMenu>
    //                     </Dropdown>
    //                     <NavItem>
    //                         <Link className="nav-link" to="/skills">CONTACT</Link>
    //                     </NavItem>
    //                 </Nav>
    //             </div>
    //             <hr/>
    //         </div>

            
    //     );
    // }
}