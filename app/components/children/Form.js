import React from "react";

// Helper Functi on
import API from "../../utils/API";

class Form extends React.Component {

    

    constructor(props) {

        super(props);

        // Create
        this.state = {
            text:''
        }

        
    }

    // CHECK THIS
    // ComponentDidMount() {
    //     API.getUserInfo().then((data) => {
    //         this.setState({});
    //     })
    // }

    render() {
        var {handleSubmit, handleChange, text} = this.props;
        return (
            <div className="panel panel-default" id="addQuote">
                <div className="panel-heading" id="myPanel">
                    <h2 className="panel-title text-center">"That's What." - She</h2>
                </div>
                <div className="panel-body text-center">
                        <form onSubmit={handleSubmit}>
                            
                            <textarea value={text} rows={3} onChange={handleChange} placeholder="Add a quote..."/>
                   
                            <input type="submit" value="Submit" />
                        </form>

                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Form;