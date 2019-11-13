import React from "react";
import ModalContainer from "../modal/modal_container";
import NewServerFormContainer from "../server/new_server_form_container";
import { Route, Link } from "react-router-dom";
import serverShowContainer from "./server_show_container";
import ServerIndexItem from "./server_index_item";
import temporaryComponent from "./temporary_component";

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

    // This will not be needed after testing phase.
    getUserServers() {
        this.props.getUserServers(this.props.userId);
    }
    
    componentDidMount() {
        this.setState(this.props.getUserServers(this.props.userId));
    }

    render() {
        const serverList = Object.values(this.props.servers)
                        .map((server, index) =>
                            <ServerIndexItem key={index} server={server}/>);

        return (
            <div className="serverChatWrapper">
                <ModalContainer />
                <div className="serverBar">
                    <Link
                        className="serverTitle"
                        to="/servers/">
                        Servers
                    </Link>
                    <ul className="serversList">
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
                <Route path="/servers/:serverId" component={serverShowContainer}/>
                <Route exact path="/servers/" component={temporaryComponent}/>

            </div>
        );
    }
}

export default ServerIndex;