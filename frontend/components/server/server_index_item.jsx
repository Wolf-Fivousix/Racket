import React from 'react';
import { Link, withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/servers/${this.props.server.id}`);
    }

    render() {
        const server = this.props.server;
        return(
            <div className="serverIndexItemBox">
                <button
                    className="serverIndexItemButton"
                    onClick={this.handleClick}>
                        {server.name}
                </button>
            </div>
        );
    }
}

export default withRouter(ServerIndexItem);