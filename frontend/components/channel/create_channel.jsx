import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { createChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

export default function CreateChannel(props) {
    const [channelName, setChannelName] = useState("");
    const dispatch = useDispatch();

    function handleNameChange(e) {
        setChannelName(e.target.value);
    }

    function newChannel() {
        dispatch(createChannel({
            title: channelName,
            server_id: Number(props.serverId)
        }))
            .then(() => dispatch(closeModal()));
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
                onClick={newChannel}
                >
                Create Channel
            </button>
        </div>
    ); 
};