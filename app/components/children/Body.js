import React from "react";

// Helper Functi on
import API from "../../utils/API";

class Body extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            userId: "",
            userName: "",
            gender: "",
            prefGender: "",
            personality: ""
        };
    }

    ComponentDidMount() {
        API.getUserInfo().then((data) => {
            this.setState({});
        })
    }

    render() {

        return (
            <div>
                Body
            </div>
        );
    }
}

// Export the componen back for use in other files
export default Body;