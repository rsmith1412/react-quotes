import React from "react";
import axios from "axios";
import {filter} from "lodash";

// Import sub-components
import Footer from "./children/Footer";
import Form from "./children/Form";
import Header from "./children/Header";
import Quotes from "./children/Quotes";


// Helper Function
import API from "../utils/API";

class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            text: '',
            quotesList: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clickFav = this.clickFav.bind(this);
        this.delQuote = this.delQuote.bind(this);

    }

     // When submit button pushed, send quote to db
    handleSubmit(event) {
        //Code for sending quote to MongoDB
        event.preventDefault();

        if(this.state.text === '') {
            alert("Please add a quote to continue.");
            return;
        }
        // Setup dummy variable for use outside of scope
        var _this = this;
        //Using POST route to send quote data to controller
        axios.post("/api/quotes", {text: this.state.text})
            .then(function(newQuote) {
                console.log(newQuote.data);
                //Using this object to set the state of quotesList with current state, plus the new quote
                _this.setState({
                    text: '',
                    quotesList: [..._this.state.quotesList, newQuote.data]
                })
            });
        
        
    }

    // Clicking star favorites the quote and pushes it to the favorited section
    clickFav(quoteObj) {
        console.log(quoteObj);
        var _this = this;
        // When star is clicked, the favorited boolean is switched
        quoteObj.favorited = !quoteObj.favorited;
        //Using axios to update the favorited property of the object specified by _id
        axios.patch("/api/quotes/" + quoteObj._id, quoteObj)
            .then(function(favQuote) {
                console.log(favQuote);
                var newQuotesList = _this.state.quotesList.map(quote => {
                    if( quote._id === quoteObj._id ) {
                        return Object.assign({}, quoteObj);

                    }
                    return quote;
                });
                //Same quotes list, but one has changed
                _this.setState({quotesList: newQuotesList})
            });
    }

    // Clicking trash icon deletes the quote from the database
    delQuote(quoteObj) {
        console.log(quoteObj, "Hi");
        var _this = this;
        axios.delete("/api/quotes/" + quoteObj._id)
            .then(function(dQuote) {
                console.log(dQuote);
                var newQuotesList = filter(_this.state.quotesList, (quote) => {return quote._id !== quoteObj._id})
                //Using this object to set the state of quotesList with current state, plus the new quote
                _this.setState({quotesList: newQuotesList})
            });
    }

    componentWillMount() {
        var _this = this;
        axios.get("/api/quotes")
            .then(function(ret) {
                console.log(ret.data);
                _this.setState({quotesList: ret.data})
            })
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        console.log(this.props);
        return (
            <div className="">
                <Header />
                {React.cloneElement(this.props.children, { 
                    handleSubmit: this.handleSubmit, 
                    handleChange: this.handleChange, 
                    text: this.state.text })}
                <Quotes quotesList={this.state.quotesList} 
                        clickFav={this.clickFav} 
                        delQuote={this.delQuote}
                        location={this.props.location.pathname} />
                <Footer />
            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
