import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import Showcase from "../components/versionThree/Showcase";
import WhitePaper from "../components/versionThree/WhitePaper";
import About from "../components/common/About";
import Team from "../components/versionThree/Team";
import Faq from "../components/versionThree/FAQ";
import Subscribe from "../components/common/Subscribe";
import Footer from "../components/common/Footer";

class HomeThree extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="home" />
                {/* Showcase: src/components/versionThree/Showcase */}
                <Showcase />
                {/* Features: src/components/versionThree/Features */}
                <WhitePaper />
                {/* About: src/components/common/About */}
                <About />
                {/* Team: src/components/versionThree/Team */}
                <Team />
                {/* Faq: src/components/versionThree/FAQ */}
                <Faq />
                {/* Subscribe: src/components/common/Subscribe */}
                <Subscribe />
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="home" />
            </React.Fragment>
        );
    }
}

export default HomeThree;
