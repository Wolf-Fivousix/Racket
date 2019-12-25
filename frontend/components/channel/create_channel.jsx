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

    function createNewChannel() {
        dispatch(createChannel({
            title: channelName,
            server_id: Number(props.serverId)
        }))
            .then(() => dispatch(closeModal()));
    }

    return(
        <div className="channelModal">
            <form>
                <label>New Channel Name:</label>
                <input 
                    className="channelNameInputField defaultInput" 
                    type="text"
                    placeholder="Enter a name"
                    onChange={handleNameChange}
                />
                <button
                    className="createChannelButton button"
                    onClick={createNewChannel}
                    >
                    Create Channel
                </button>
            </form>
        </div>
    ); 
};