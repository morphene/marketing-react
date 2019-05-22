import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Team extends Component {
    render() {
        //Team loop start
        const teamData = this.props.teamsData.map((team, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <div className="our-team">
                    <div className="pic">
                        {team.image && <img src={team.image} alt="team" />}
                        <i className={team.icon} style={{fontSize: "16rem"}} />
                        <ul className="social">
                            {team.fbLink && (
                                <li>
                                    <a
                                        target="_external"
                                        rel="noopener noreferrer"
                                        href={team.fbLink}>
                                        <i className="icofont-facebook" />
                                    </a>
                                </li>
                            )}

                            {team.twitterLink && (
                                <li>
                                    <a
                                        target="_external"
                                        rel="noopener noreferrer"
                                        href={team.twitterLink}>
                                        <i className="icofont-twitter" />
                                    </a>
                                </li>
                            )}

                            {team.githubLink && (
                                <li>
                                    <a
                                        target="_external"
                                        rel="noopener noreferrer"
                                        href={team.githubLink}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                            )}

                            {team.steemitLink && (
                                <li>
                                    <a
                                        target="_external"
                                        rel="noopener noreferrer"
                                        href={team.steemitLink}>
                                        <i className="icofont-web" />
                                    </a>
                                </li>
                            )}

                        </ul>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{team.name}</h3>
                        <span className="post">{team.designation}</span><br />
                        <span className="post">{team.designation2}</span>
                    </div>
                </div>
            </div>
        ));
        //Team loop END
        return (
            <React.Fragment>
                <section id="team" className="team-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme team-slides"
                                loop={false}
                                autoplay={true}
                                nav={false}
                                mouseDrag={true}
                                autoplayHoverPause={false}
                                responsiveClass={true}
                                dots={false}
                                navText={[
                                    "<i class='icofont-curved-double-left'></i>",
                                    "<i class='icofont-curved-double-right'></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 2
                                    },
                                    1024: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 4
                                    }
                                }}
                            >
                                {teamData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Team.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    sectionName: "Team",
    sectionTitle: "Our Team Members",
    sectionDescription:
        "Meet the exceptional team behind the Morphene Blockchain.",

    teamsData: [
        {
            twitterLink: "//twitter.com/netuoso",
            steemitLink: "//steemit.com/netuoso",
            githubLink: "//github.com/netuoso",
            linkedinLink: "//linkedin.com/in/chaneyandrew/",
            name: "Andrew Chaney",
            icon: "icofont-businessman",
            designation: "Founder",
            designation2: "Chief Executive Officer"
        },
        {
            name: "Laura Guagliardo",
            icon: "icofont-businesswoman",
            designation: "Design Coordinator"
        },
        {
            name: "Chris Chaney",
            linkedinLink: "//linkedin.com/in/cmchaney/",
            icon: "icofont-businessman",
            designation: "Chief Technological Officer"
        },
        {
            name: "Linda Hunkins",
            icon: "icofont-businesswoman",
            designation: "Marketing Director"
        }
    ]
};

export default Team;
