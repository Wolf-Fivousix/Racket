import React, { useState } from "react";

export default function ChannelOptions(props) {
    const [channeLName, setChannelName] = useState("");

    function handleNameChange(e) {
        setChannelName(e.target.value);
    }

    function createChannel() {
        console.log(channeLName);
        props.createChannel({
            title: "Beep Boop",
            server_id: Number(props.serverId)
        });
    }

    return(
        <div className="channelModal">
            <p>New Channel Name:</p>
            <input 
                className="channelNameInputField defaultInput" 
                type="text"
                onChange={handleNameChange}
            />
            <button
                className="createChannelButton button"
                onClick={createChannel}
                >
                Create Channel
            </button>
        </div>
    ); 
};