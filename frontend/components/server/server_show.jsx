import React from "react";
import { withRouter } from "react-router-dom";
import UpdateServer from "./update_server";

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSelf = this.deleteSelf.bind(this);
        this.updateName = this.updateName.bind(this);
        this.state = { name: "" };
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.match.params.serverId !== prevProps.match.params.serverId) {
    //         this.props.getServer(this.props.match.params.serverId)
    //             .then(() => this.setState({ name: this.props.servers[this.props.match.params.serverId].name}))
    //     }
    // }
    updateName() {
        console.log(`You tried to update ${this.props.servers[this.props.match.params.serverId].name} name`);
        this.props.openModal(() => <UpdateServer />);
    }
    
    deleteSelf() {
        this.props.deleteServer(this.props.match.params.serverId);
        this.props.history.push("/servers/");
    }

    render() {
        if (!this.props.servers[this.props.match.params.serverId]) return null;

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