import React from "react";

// Helper Functi on
import API from "../../utils/API.js";

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <header id="masthead">
                <div class="row">
                <div class="container-fluid" id="header-container">

                    <div class="col-xs-4 col-xs-offset-1" id="qApp">
                        <h1>Quotes App</h1>
                    </div>

                    <nav class="col-xs-5 col-xs-offset-2" id="nav">

                        <div class="col-xs-3" id="home">
                            <a href="/">Home</a>
                        </div>
                            
                        <div class="col-xs-offset-1 col-xs-3" id="fav"> 
                            <a href="/favorites">Favorites</a>
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