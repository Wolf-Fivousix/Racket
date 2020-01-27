import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { createChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

export default function CreateChannel(props) {
    const [channelName, setChannelName] = useState("");
    const dispatch = useDispatch();
    const channels = useSelector(state => state.entities.channels);
    const { history } = useReactRouter();

    function handleNameChange(e) {
        setChannelName(e.target.value);
    }

    function createNewChannel() {
        dispatch(createChannel({
            title: channelName,
            server_id: Number(props.serverId)
        }))
            .then(({ channel }) => Object.values(channels).length ? null : history.push(`/servers/${props.serverId}/${channel.id}`))
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
                    autoFocus
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