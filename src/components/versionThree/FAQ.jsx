import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="faq" className="faq-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="faq">
                                    <Accordion
                                        rootTag="ul"
                                        className="accordion"
                                    >
                                        {this.props.faqData.map(item => {
                                            return (
                                                <AccordionItem
                                                    key={item}
                                                    title={item.title}
                                                    expanded={true}
                                                    expandedClassName="active"
                                                    rootTag="li"
                                                    className="accordion-item"
                                                    titleTag="a"
                                                    titleClassName="accordion-title"
                                                >
                                                    <div>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-img">
                                    {false && <img src={this.props.sectionImage} alt="faq" />}
                                    <i className="icofont-question" style={{marginLeft: '25%', fontSize: "16rem"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Faq.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    sectionImage: PropTypes.string,
    faqData: PropTypes.array
};

//Default Props
Faq.defaultProps = {
    sectionName: "FAQ",
    sectionTitle: "Frequently Asked Questions",
    sectionDescription:
        "Blockchain Technology can definitely be rather confusing. Have no concern, however, we are here to help.",
    sectionImage: require("../../assets/img/about.png"),

    faqData: [
        {
            title: "How do I get MORPH tokens?",
            description:
                "New user accounts will be created with an initial MORPH balance that should be sufficient to allow free use of the Morphene Blockchain. This is subject to change."
        },
        {
            title: "How do I buy MORPH tokens?",
            description:
                "There is currently no date set for the commencement of the Initial Coin Offering. Check back later for more information."
        },
        {
            title: "What can i do with MORPH tokens?",
            description:
                "MORPH tokens are going to be used within the Morphene Blockchain to place bids on auctions. In the future, MORPH tokens may be able to be exchanged for other cryptocurrencies."
        },
        {
            title: "Will I make money if I purchase MORPH?",
            description:
                "MORPH tokens retain no inherent market value and there should be no expectation of profit."
        },
        {
            title: "Will I be able to transfer MORPH tokens outside Morphene Blockchain?",
            description:
                "The MORPH tokens can only be utilized within the Morphene Blockchain."
        },
        {
            title: "Will MORPH be listed on cryptocurrency exchanges?",
            description:
                "It is possible, however, no user should purchase MORPH tokens with the expectation of MORPH being listed on an exchange."
        }
    ]
};

export default Faq;
