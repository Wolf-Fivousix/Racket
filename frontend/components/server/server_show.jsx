import React from "react";
import { withRouter } from "react-router-dom";
import UpdateServerContainer from "./update_server_container";
import TemporaryComponent from "./temporary_component";

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSelf = this.deleteSelf.bind(this);
        this.updateName = this.updateName.bind(this);
        this.state = { name: "" };
    }

    // This will probably be needed once Chatting functionality starts to kick in.
    // componentDidUpdate(prevProps) {
    //     if(this.props.match.params.serverId !== prevProps.match.params.serverId) {
    //         this.props.getServer(this.props.match.params.serverId)
    //             .then(() => this.setState({ name: this.props.servers[this.props.match.params.serverId].name}))
    //     }
    // }

    updateName() {
        const serverId = this.props.match.params.serverId;
        this.props.openModal(() => <UpdateServerContainer serverId={serverId}/>);
    }
    
    deleteSelf() {
        this.props.deleteServer(this.props.match.params.serverId);
        this.props.history.push("/servers/");
    }

    render() {
        if (!this.props.servers[this.props.match.params.serverId]) return <TemporaryComponent />;

        return(
            <div className="content">
                <div className="channelList" >
                    <h1 className="serverNameHeader">
                        {this.props.servers[this.props.match.params.serverId].name}
                    </h1>
                    {/* <h1>{this.state.name}</h1> */}
                    
                    <button
                        className="updateButton button"
                        onClick={this.updateName}>
                        New Name
                    </button>
                    <button
                        className="deleteButton button"
                        onClick={this.deleteSelf}>
                        DESTROY!
                    </button>
                </div >
                <div className="chat">
                    <h1>Server messages</h1>
                </div>
            </div>
        );
    }
};

export default withRouter(ServerShow);