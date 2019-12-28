import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from 'use-react-router';
import ChannelIndexItem from "./channel_index_item";
import CreateChannel from "./create_channel";
import { getAllChannels } from "../../actions/channel_actions";
import { openModal } from "../../actions/modal_actions";

export default function ChannelIndex(props) {
    const channels = useSelector(state => state.entities.channels);
    const dispatch = useDispatch();
    const { history, match } = useReactRouter();

    useEffect(() => {
        dispatch(getAllChannels(props.serverId))
            // Display first channel in the list.
            .then(response => {
                const channels = Object.values(response.channels);
                const firstChannel = channels[0];
                if (firstChannel) history.push(`${match.url}/${firstChannel.id}`);
            });
    }, [props.serverId]);


    function createChannel() {
        dispatch(openModal(() => <CreateChannel serverId={props.serverId}/>));
    }

    const channelsList = Object
                                .values(channels)
                                .map((channel, index) =>
                                    <ChannelIndexItem key={index} channel={channel} />
                                );

    return (
        <ul className="channelIndex">
            <button className="createChannel" onClick={createChannel}>+</button>
            {channelsList}
        </ul>
    );
};