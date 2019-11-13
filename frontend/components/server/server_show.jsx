import React from "react";
import { Link } from "react-router-dom";

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.servers);
        // this.props.servers[this.props.match.params.serverId]
    }

    render() {
        return(
            <div className="content">
                <div className="channelList" >{"aaaaa"}</div >
                <div className="chat">
                    <h1>Server messages</h1>
                </div>
            </div>
        );
    }
};

export default ServerShow;