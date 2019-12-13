import React from 'react';
import { withRouter } from "react-router-dom";

class UpdateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        );
    }

    handleSubmit() {
        debugger;
        this.props.updateServer(this.props.serverId, this.state.name)
            .then(() => this.props.closeModal());
    }

    render() {
        return (
            <div className="updateServerModal modalDefault">
                <form className="UpdateServerForm">
                    <label className="updateServerLabel">Master, what should be my new name?
                        <input
                            type="text"
                            className="updateServerInput defaultInput"
                            onChange={this.handleInput("name")}/>
                    </label>

                    <button
                        className="updateServerButton button"
                        onClick={this.handleSubmit}>
                        Update Name
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(UpdateServer);