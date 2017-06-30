import React from "react";

// Helper Functi on
import API from "../../utils/API";

class Favorites extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
         
        };
    }

    render() {

        return (
            <div className="favs">
                <h2>Favorite Quotes</h2>
                <div className="banner">
                    Your Best Quotes
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Favorites;