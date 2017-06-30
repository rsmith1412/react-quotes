import React from "react";
import {filter} from "lodash";

// Helper Functi on
import API from "../../utils/API";

class Quotes extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
           
        };
    }

    render() {
        var list = this.props.quotesList;
        if (this.props.location === "/favorites") {
            list = filter(list, {favorited: true});
        }
        return (
            <div className="container" id="quotes">
                <div className="row">
                    {list.map((quote) => <Quote 
                        key={quote._id} 
                        quote={quote} 
                        clickFav={this.props.clickFav} 
                        delQuote={this.props.delQuote} />)}
                </div>
            </div>
        );
    }
}

// Create and update list of quotes before render to save time
const Quote = (props) => {
    var handleClick = function() {
        props.clickFav(props.quote);
    }
    var delClick = function() {
        props.delQuote(props.quote);
    }
    return (
        <div className = "quote-div">
            <div className="star" onClick={handleClick}>
                {props.quote.favorited ?
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    : <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                }
                
            </div>
            {props.quote.text}

            <div className="trash" onClick={delClick}>
                
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                
            </div>

        </div>
    )
}

// Export the component back for use in other files
export default Quotes;