import React from "react";

class ServerIndex extends React.Component {
    render() {
        return (
            <div>
                <h1>Server Page</h1>
                <h2>Get RACKEEETTTT! =D</h2>

                <button onClick={this.props.logout}>Logout</button>
            </div>
        );
    }
}

export default ServerIndex;