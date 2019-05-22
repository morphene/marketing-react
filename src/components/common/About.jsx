import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class About extends Component {
    render() {
        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
                {index % 2 === 0 ? (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <i className={about.iconName} style={{marginLeft: '25%', fontSize: "15rem"}} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mb-0">
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mt-0">
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <i className={about.iconName} style={{marginLeft: '25%', fontSize: "15rem"}} />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                {/* Start About Area */}
                <section id="about" className="about-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h3>{this.props.aboutTitle}</h3>
                                    <p>{this.props.aboutDescription}</p>
                                    <ul className="pull-left">
                                        {this.props.aboutListItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemOne}
                                            </li>
                                        )}

                                        {this.props.aboutListItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemTwo}
                                            </li>
                                        )}
                                        {this.props.aboutListItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemThree}
                                            </li>
                                        )}
                                        {this.props.aboutListItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFour}
                                            </li>
                                        )}
                                    </ul>
                                    <ul>
                                        {this.props.aboutListItemFive && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFive}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSix && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSix}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSeven && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSeven}
                                            </li>
                                        )}
                                        {this.props.aboutListItemEight && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemEight}
                                            </li>
                                        )}
                                    </ul>
                                    <a
                                        href={this.props.aboutBtnLink}
                                        className="btn btn-primary"
                                    >
                                        {this.props.aboutBtnText}
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img">
                                    <img
                                        style={{marginLeft: "25%"}}
                                        src={this.props.aboutImage}
                                        alt="about"
                                    />
                                </div>
                            </div>
                        </div>
                        {aboutData}
                    </div>
                </section>
                {/* End About Area */}
            </React.Fragment>
        );
    }
}

//Props Types
About.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutBtnText: PropTypes.string,
    aboutBtnLink: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    sectionName: "About Morphene Blockchain",
    sectionTitle: "Morphene Blockchain",
    sectionDescription:
        "Morphene Blockchain is focused on application specificity and delivering a highly efficient online auction bidding Proof-of-Concept.",

    aboutImage: require("../../assets/img/pill-300x262.png"),
    aboutTitle: "Morphene Blockchain is reinventing the online auction model",
    aboutDescription:
        "Online auction systems are traditionally trust-based models without proper transparency into the inner system mechanics. Morphene Blockchain is reinventing the online auction system by integrated a distributed blockchain database with full transparency, fault tolerance, and high efficiency.",
    aboutListItemOne: "Trust-Less",
    aboutListItemTwo: "Decentralized",
    aboutListItemThree: "Fault Tolerant",
    aboutListItemFour: "Highly Efficient",
    aboutListItemFive: "Fully Transparent",
    aboutListItemSix: "Auditable",
    aboutListItemSeven: "Delegated Proof-of-Stake",
    aboutListItemEight: "Fair Token Distribution",
    aboutBtnText: "Read More",
    aboutBtnLink: "#0",
    aboutsData: [
        {
            image: require("../../assets/img/1.png"),
            iconName: "icofont-ui-lock",
            position: ".01",
            title: "Trust-Less",
            description:
                "With Morphene Blockchain, you do not have to put any level of blind trust into the system. The blockchain database cryptographically processes all transactions into blocks via the means of Delegated Proof-of-Stake. The DPoS algorithm is very efficient and does not require near as much computing resources as other forms of token distribution such as Proof-of-Work.",
            listItemOne: "Delegated Proof-of-Stake",
            listItemFour: "Cryptographically Verified Blocks"
        },
        {
            image: require("../../assets/img/2.png"),
            iconName: "icofont-transparent",
            position: ".02",
            title: "Fully Transparent",
            description:
                "The blockchain database allows all users to be able to view any transaction that has ever taken place in the Morphene network. This level of control grants the user the ability to know precisely when their bids were placed and any bids placed around that time. This will help users feel more at ease when it comes to knowing they are not being unfairly cheated.",
            listItemOne: "Distributed Blockchain Database",
            listItemTwo: "Complete Audit Trail"
        },
        {
            image: require("../../assets/img/3.png"),
            iconName: "icofont-warning",
            position: ".03",
            title: "Fault Tolerant",
            description:
                "The Morphene Blockchain utilizes Graphene/Steem under the hood for a highly efficient, fault tolerant, peer-to-peer network infrastructure. Users are able to download and run the source code and connect into this network. It is through this method that users are able to become witnesses and compete for a position in the schedule to produce blocks.",
            listItemOne: "21 Total Witnesses",
            listItemTwo: "Mixed Delegated Proof-of-Stake & Proof-of-Work"
        },
        {
            image: require("../../assets/img/4.png"),
            iconName: "icofont-people",
            position: ".04",
            title: "Fair Token Distibution",
            description:
                "There will be no pre-sale or early sale benefit during the Initial Coin Offering. Additionally, the initial tokens that are not sold during ICO will be used for development, marketing, business-to-business relations, sponsorships, give-a-ways, and promotions. The ICO date will be announced at least 4 weeks prior to commencement.",
            listItemOne: "No Pre-Sale, Pre-Mine, Pre-Order",
            listItemTwo: "Unsold tokens to used for business growth"
        }
    ]
};

export default About;
