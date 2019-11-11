import React from "react";
import ModalContainer from "../modal/modal_container";
import NewServerFormContainer from "../server/new_server_form_container";

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.addServerRequest = this.addServerRequest.bind(this);
    }


    addServerRequest() {
        this.props.openModal(() => <NewServerFormContainer />);
    }

    showServer(serverId) {
        this.props.showServer(5);
    }

    deleteServer(serverId) {
        this.props.deleteServer(6);
    }

    render() {
        return (
            <div className="serverChatWrapper">
                <ModalContainer />
                <div className="serverBar">
                    <div className="serverTitle">Servers</div>
                    <button
                        className="addServerButton"
                        onClick={this.addServerRequest}
                        >
                        +
                    </button>
                    <button
                        onClick={this.showServer.bind(this)}>
                        Show
                    </button>
                    <br/>
                    <button
                        onClick={this.deleteServer.bind(this)}>
                        Delete
                    </button>
                </div>
                <div className="content">
                    <div className="sideBar">Channel 1</div>
                    <div className="chat">
                        <h1>Server Page</h1>
                        <h2>Get RACKEEETTTT! =D</h2>
                        <img
                            className="createServerImage"
                            src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt=""/>
                    </div>
                </div>

                <button onClick={this.props.logout}>Logout</button>
            </div>
        );
    }
}

export default ServerIndex;