import React from "react";
import ModalContainer from "../modal/modal_container";
import NewServerFormContainer from "../server/new_server_form_container";
import { Route } from "react-router-dom";
import serverShowContainer from "./server_show_container";
import ServerIndexItem from "./server_index_item";

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

    getUserServers() {
        // I'm only getting the first one. I need to fix the Controller to,
        // return all the results.
        this.props.getUserServers(this.props.userId);
    }

    render() {
        // debugger;
        // I need to put the Users servers into the State before I can access them.
        // const serverList = Object.values(this.props.servers).map(server => <ServerIndexItem server={server}/>);
        const serverList = [];
        return (
            <div className="serverChatWrapper">
                <ModalContainer />
                <div className="serverBar">
                    <div className="serverTitle">Servers</div>
                    <ul>
                        {serverList}
                    </ul>
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
                    <button
                        onClick={this.getUserServers.bind(this)}>
                        Get Servers
                    </button>
                    <button
                        className="logoutButton button"
                        onClick={this.props.logout}>
                        Logout
                    </button>
                </div>
                <div className="content">
                    <Route path="/servers/:serverId" component={serverShowContainer}/>
                    {/* This will go inside the next component. */}
                    <div className="channelList">Channel 1</div>
                    <div className="chat">
                        <h1>Server Page</h1>
                        <h2>Get RACKEEETTTT! =D</h2>
                        <img
                            className="createServerImage"
                            src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt=""/>
                    </div>
                </div>

            </div>
        );
    }
}

export default ServerIndex;