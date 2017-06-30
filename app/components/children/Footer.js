import React from "react";

// Helper Functi on
import API from "../../utils/API";

class Footer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};
    }


    render() {

        return (
            <footer>
                <div className="footer">
                    &copy; 2017 Robert Smith
                </div>
            </footer>
        );
    }
}

// Export the component back for use in other files
export default Footer;