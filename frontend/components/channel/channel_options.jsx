import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { destroyChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

export default function ChannelOptions(props) {
    const dispatch = useDispatch();
    const channels = useSelector(state => state.entities.channels);
    const { history, location } = useReactRouter();

    function deleteChannel() {
        dispatch(destroyChannel(props.channelId))
            .then(({ channelId }) => {
                // Redirect user to first channel, if available.
                const ids = Object.keys(channels);
                for (let i = 0; i < ids.length; ++i) {
                    if (channelId !== ids[i]) return history.push(`${ids[i]}`)
                }
                return history.push(`${location.pathname.match(/\/servers\/\d+/)[0]}`);
            })
            .then(() => dispatch(closeModal()))
    }

    return (
        <div className="channelModal">
            <button
                className="deleteChannelButton button"
                onClick={deleteChannel}
                >
                {`DELETE channel ${props.channelName}`}
            </button>
        </div>
        
    );
}