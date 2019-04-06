import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand,
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
            <div className>
                <div className="header-div header-title">
                    {/* <span className="nav-link">Yoonho Shin</span> */}
                </div>
                <div className="header-div header-nav">
                    <Navbar fixed={'top'} color="white">
                        <NavbarBrand>Yoonho Shin</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="nav-link" to="home" spy={true} smooth={true}
                                offset={-50} duration={500} onSetActive={this.handleSetActive}>
                                HOME
                            </Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to="about" spy={true} smooth={true}
                                duration={500} onSetActive={this.handleSetActive}>
                                ABOUT
                                </Link>
                        </NavItem>
                        {/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                PROJECTS
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>스터디타임</DropdownItem>
                                <DropdownItem>인공위성 관제 모니터링 웹 서비스</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> */}
                        <NavItem>
                            <Link className="nav-link" to="projects" spy={true} smooth={true}
                                duration={500} onSetActive={this.handleSetActive}>
                                PROJECTS
                                </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="contact" spy={true} smooth={true}
                                duration={500} onSetActive={this.handleSetActive}>
                                CONTACT
                                </Link>
                        </NavItem>
                    </Nav>
                    </Navbar>
                </div>
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