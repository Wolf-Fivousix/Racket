import React, { useEffect } from "react";
import ChannelIndexItemContainer from "./channel_index_item_container";
import CreateChannel from "./create_channel";

export default function ChannelIndex(props) {
    useEffect(() => {
        props.getAllChannels(props.serverId);
    }, [props.serverId]);


    function createChannel() {
        props.openModal(() => <CreateChannel />);
        // This function call is going to be part of the modal, now!
        // props.createChannel({
        //     title: "Beep Boop",
        //     server_id: Number(props.serverId)
        // });
    }

    const channelsList = Object
                                .values(props.channels)
                                .map((channel, index) =>
                                    <ChannelIndexItemContainer key={index} channel={channel} />
                                );

    return (
        <ul className="channelIndex">
            <button className="createChannel" onClick={createChannel}>+</button>
            {channelsList}
        </ul>
    );
};