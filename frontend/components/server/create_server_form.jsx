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
        this.props.createServer(this.state)
            .then(({ server }) => 
                this.props.joinServer({
                    server_id: server.id
                }))
            .then(({ membership }) => 
                this.props.createChannel({
                    title: "General",
                    server_id: membership.server_id
                }))
            .then(response => this.props.history.push(`/servers/${response.channel.server_id}`))
            .then(() => this.props.closeModal())
    }

    handleInput(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        );
    }

    backToNewServerForm(e) {
        e.preventDefault();
        this.props.openModal(() => <NewServerFormContainer />)
    }

    render () {
        let createServerLabel = "serverNameLabel";
        let createServerErrorMessage = "";
        const errorsArray = this.props.errors.servers.responseJSON;
        if (errorsArray) {
            createServerLabel += " serverWithErrors";
            createServerErrorMessage = " - " + errorsArray;
        }

        return (
            <div className="modalDefault">
                <form
                    className="createServerForm"
                    onSubmit={this.handleSubmit}>
                    <div className="createServerMessageWrapper">
                        <h1 className="createServerMessage">CREATE YOUR SERVER</h1>
                        <h3 className="createServerSubMessage">By creating a server, you will have access to <strong>free</strong>  voice and text chat to use amongst your friends.</h3>
                    </div>
                
                    <label className={createServerLabel}>
                        {`SERVER NAME${createServerErrorMessage}`}
                    </label>
                    <input
                        className="createServerInputField"
                        type="text"
                        onChange={this.handleInput("name")}
                        placeholder="Enter a Name" />
                    <div className="createServerFormButtonsBar">
                        <button
                            type="button"
                            className="goBackButton"
                            onClick={this.backToNewServerForm}>
                            <img
                                className="goBackButtonImage"
                                src="https://discordapp.com/assets/eb57a76361c43375bf23207ad2acc631.svg"
                                alt="Go Back Button Image" />
                            <p className="goBackButtonText">BACK</p>
                        </button>

                        <button
                            className="createServerSubmitButton button">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateServerForm;