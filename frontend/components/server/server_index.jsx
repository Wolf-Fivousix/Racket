import React from "react";

class ServerIndex extends React.Component {
    render() {
        return (
            <div className="serverChatWrapper">
                <div className="serverBar">Servers</div>
                <div className="content">
                    <div className="sideBar">Channel 1</div>
                    <div className="chat">
                        <h1>Server Page</h1>
                        <h2>Get RACKEEETTTT! =D</h2>
                    </div>
                </div>

                <button onClick={this.props.logout}>Logout</button>
            </div>
        );
    }
}

export default ServerIndex;