import React from 'react';
import { Link, withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // console.log(this.props);
        // this.props.history.push(`/servers/${this.props.server.id}`);
    }

    render() {
        const server = this.props.server;
        return(
            <Link
                to={`/servers/${this.props.server.id}`}
                className="serverIndexItemBox"
                >
                {server.name}
            </Link>
        );
    }
}

export default withRouter(ServerIndexItem);