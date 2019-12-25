import React, { useState } from "react";
import { useSelect, useDispatch } from "react-redux";
import { destroyChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

export default function ChannelOptions(props) {
    const dispatch = useDispatch();

    function deleteChannel() {
        dispatch(destroyChannel(props.channelId))
            .then(() => dispatch(closeModal()));
    }

    return (
        <div className="channelModal">
            <button
                className="deleteChannelButton button"
                onClick={deleteChannel}
                >
                DELETE
            </button>
        </div>
        
    );
}