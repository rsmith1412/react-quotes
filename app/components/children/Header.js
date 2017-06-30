import React from "react";
import { Link } from "react-router";

// Helper Functi on
import API from "../../utils/API.js";

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <header className="masthead">
                <div className="row">
                <div className="" id="header-container">

                    <div className="col-lg-5" id="qApp">
                        <h2>Quotes App</h2>
                    </div>

                    <nav className="container col-lg-5 col-lg-offset-2" id="nav">

                        <div className="col-lg-offset-1 col-lg-3" id="home">
                            <Link to="/">Home</Link>
                        </div>
                            
                        <div className="col-lg-3" id="fav"> 
                            <Link to="/favorites">Favorites</Link>
                        </div>

                    </nav>

                </div>  
                </div>

            </header>
        );
    }
}

// Export the component back for use in other files
export default Header;