import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer">
                                    <h4 className="logo">
                                        <a href="#home">
                                            Morphene<span> Blockchain</span>
                                        </a>
                                    </h4>
                                    <p>{this.props.siteDescription}</p>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={this.props.btnLink}
                                        className="btn btn-primary"
                                    >
                                        {this.props.btnText}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" style={{paddingLeft: '4rem'}}>
                                <div className="single-footer footer-navbar-nav">
                                    <h3>{this.props.usefullLinksTitle}</h3>
                                    <ul>
                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a className="" href="#home">
                                                    <i className="icofont-double-right" />
                                                    Home
                                                </a>
                                            ) : (
                                                <NavLink
                                                    className=""
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    Home
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a href="#whitepaper">
                                                    <i className="icofont-double-right" />
                                                    WhitePaper
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    WhitePaper
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a className="" href="#about">
                                                    <i className="icofont-double-right" />
                                                    About
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    About
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a
                                                    className=""
                                                    href="#services"
                                                >
                                                    <i className="icofont-double-right" />
                                                    Services
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    Services
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            <NavLink
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                to="//steemit.com/@morphene-io">
                                                <i className="icofont-double-right" />
                                                Blog
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-footer">
                                    <h3>{this.props.contactInfoTitle}</h3>
                                    <p>{this.props.contactInfoText}</p>
                                    <ul className="contact-info">
                                        <li>
                                            <i className="icofont-envelope" />
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`mailto:${this.props.email}`}>{this.props.email}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-telegram" />
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={this.props.telegram}>{this.props.telegram}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-web" />
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={this.props.steemit}>{this.props.steemit}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <a
                                        href="//boonedevelopment.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none"}}>
                                        <p>{this.props.copyRightText}</p>
                                    </a>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <ul>
                                        {this.props.githubLink && (
                                            <li>
                                                <Link
                                                    to={this.props.githubLink}>
                                                    <FontAwesomeIcon icon={faGithub} />
                                                </Link>
                                            </li>
                                        )}

                                        {this.props.steemitLink && (
                                            <li>
                                                <Link
                                                    to={this.props.steemitLink}
                                                    className="icofont-web">
                                                </Link>
                                            </li>
                                        )}

                                        {this.props.telegramLink && (
                                            <li>
                                                <Link
                                                    to={this.props.telegramLink}
                                                    className="icofont-telegram">
                                                </Link>
                                            </li>
                                        )}

                                        {this.props.twitterlLink && (
                                            <li>
                                                <Link
                                                    to={this.props.twitterlLink}
                                                    className="icofont-twitter">
                                                </Link>
                                            </li>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

//Props Types
Footer.propTypes = {
    siteDescription: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,

    usefullLinksTitle: PropTypes.string,

    supportTitle: PropTypes.string,
    supportsLinks: PropTypes.array,

    contactInfoTitle: PropTypes.string,
    contactInfoText: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,

    fbLink: PropTypes.string,
    twitterlLink: PropTypes.string,
    instagramlLink: PropTypes.string,
    linkedinlLink: PropTypes.string,
    vimeolLink: PropTypes.string
};

//Default Props
Footer.defaultProps = {
    siteDescription:
        "Morphene Blockchain is going to completely interrupt the online auction marketplace through innovative and efficient trust-less application specificity. Essentially, what you thought you knew about online auctions has changed.",
    btnText: "Get Started",
    btnLink: "//morphene.io/auctions",

    usefullLinksTitle: "Useful Links",

    contactInfoTitle: "Contact Info",
    steemit: "https://steemit.com/@morphene-io",
    email: "morphene@boonedevelopment.com",
    telegram: "https://t.me/morphene_chat",

    copyRightText: "Copyright \u00a9 Boone Development 2019 All Rights Reserved.",
    twitterlLink: "//twitter.com/@morphene-io",
    githubLink: "//github.com/morphene/",
    telegramLink: "//t.me/morphene_chat",
    steemitLink: "//steemit.com/@morphene-io"
};
export default Footer;
