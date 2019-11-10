import React from "react";
import NewServerFormContainer from "./new_server_form_container";

class CreateServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backToNewServerForm = this.backToNewServerForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state);
        
    }

    handleInput(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        );
    }

    backToNewServerForm() {
        console.log("going baaaaaaack");
        this.props.openModal(() => <NewServerFormContainer />)
    }

    render () {
        return (
            <div className="modalDefault">
                <form
                    className="createServerForm"
                    onSubmit={this.handleSubmit}>
                    <div className="createServerMessageWrapper">
                        <h1 className="createServerMessage">CREATE YOUR SERVER</h1>
                        <h3 className="createServerSubMessage">By creating a server, you will have access to <strong>free</strong>  voice and text chat to use amongst your friends.</h3>
                    </div>
                
                    <label className="serverNameLabel">
                        SERVER NAME
                    </label>
                    <input
                        className="createServerInputField"
                        type="text"
                        onChange={this.handleInput("name")}
                        placeholder="Enter a Name" />
                    <button
                        className="goBackButton"
                        onClick={this.backToNewServerForm}>
                        <img
                            className="goBackButtonImage"
                            src="https://discordapp.com/assets/eb57a76361c43375bf23207ad2acc631.svg"
                            alt="Go Back Button Image" />
                        <p className="goBackButtonText">BACK</p>
                    </button>
                    <button
                        className="button">
                        CREATE
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateServerForm;