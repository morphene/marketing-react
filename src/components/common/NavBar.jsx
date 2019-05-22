import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                        {this.props.pageName === "home" ? (
                            <React.Fragment>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={800}
                                    className="navbar-brand"
                                >
                                    Morphene<span>&nbsp;blockchain</span>
                                </Link>
                            </React.Fragment>
                        ) : (
                            <LinkContainer exact to="/">
                                <Navbar.Brand className="navbar-brand">
                                    Morphene<span>&nbsp;blockchain</span>
                                </Navbar.Brand>
                            </LinkContainer>
                        )}

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {this.props.pageName === "home" ? (
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link homenav"
                                    >
                                        Home
                                    </Link>
                                ) : (
                                    <LinkContainer exact to="/">
                                        <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                )}

                                {this.props.pageName === "home" ? (
                                    <React.Fragment>
                                        <Link
                                            activeClass="active"
                                            to="whitepaper"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            WhitePaper
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            About
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="team"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            Team
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            to="faq"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            FAQ
                                        </Link>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            WhitePaper
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Team
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            FAQ
                                        </NavLink>
                                    </React.Fragment>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;
