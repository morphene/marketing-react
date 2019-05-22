import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class WhitePaper extends Component {
    render() {
        const featuredata = this.props.featuresData.map((feature, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: "none"}}
                    href="/MorpheneWhitePaper.pdf">
                    <div className="single-features">
                        <i className={feature.icon} />
                        <h3>{feature.featuresName}</h3>
                        <p>{feature.description}</p>
                    </div>
                </a>
            </div>
        ));

        return (
            <React.Fragment>
                <section id="whitepaper" className="features-area  ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            {featuredata}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

WhitePaper.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    featuresData: PropTypes.array
};

WhitePaper.defaultProps = {
    sectionName: "",
    sectionTitle: "Get The WhitePaper",
    sectionDescription:
        "The Morphene WhitePaper is a high level, technical overview of the Morphene Blockchain.",

    featuresData: [
        {
            icon: "icofont-paper",
            featuresName: "Download Morphene WhitePaper",
            description:
                "Click here to visit the WhitePaper download page."
        }
    ]
};
export default WhitePaper;
