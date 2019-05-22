import React, { Component } from "react";
import PropTypes from "prop-types";

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner bg-gray">
                    <div className="creative-bg-two" />
                    <div className="pattern" />
                    <div className="pattern-2" />

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="main-banner-content">
                                            <h1>{this.props.showcasenName}</h1>
                                            <p>
                                                {this.props.showcaseDescription}
                                            </p>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={
                                                    this.props
                                                        .showcaseBtnOneLink
                                                }
                                                className="btn btn-primary"
                                            >
                                                {this.props.showcaseBtnOneText}
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={
                                                    this.props
                                                        .showcaseBtnTwoLink
                                                }
                                                className="btn btn-secondary"
                                            >
                                                {this.props.showcaseBtnTwoText}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="banner-img">
                                            <img
                                                src={this.props.showcaseImage}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                </div>
            </React.Fragment>
        );
    }
}

//Props Types
Showcase.propTypes = {
    showcasenName: PropTypes.string,
    showcaseDescription: PropTypes.string,
    showcaseImage: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string
};

//Default Props
Showcase.defaultProps = {
    showcasenName: "Welcome to Morphene Blockchain",
    showcaseDescription:
        "Morphene is an application specific blockchain database that supports auctions that reward users with cryptocurrency. Morphene is the first Graphene based blockchain that attemps to reward all participants in the network through means of a novel auction bidding system.",
    showcaseImage: require("../../assets/img/medical-drug-pill.svg"),
    showcaseBtnOneLink: "//morphene.io/auctions",
    showcaseBtnOneText: "Get Started",
    showcaseBtnTwoLink: "/MorpheneWhitePaper.pdf",
    showcaseBtnTwoText: "Morphene WhitePaper"
};

export default Showcase;
