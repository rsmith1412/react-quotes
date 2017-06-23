import React from "react";

// Import sub-components
import Body from "./children/Body";
import Footer from "./children/Footer";
import Header from "./children/Header";
import Quotes from "./children/Quotes";


// Helper Functi on
import API from "../utils/API";

class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <div className="Main">
                <Header />
                <Body />
                <Quotes />
                <Footer />
            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
