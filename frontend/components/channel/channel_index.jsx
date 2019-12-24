import React from "react";
import ChannelIndexItemContainer from "./channel_index_item_container";

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);

        this.createChannel = this.createChannel.bind(this);
    }

    componentDidMount() {
        this.props.getAllChannels(this.props.serverId);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.serverId !== this.props.serverId){
            this.props.getAllChannels(this.props.serverId);
        }
    }

    createChannel() {
        this.props.createChannel({
            title: "Beep Boop",
            server_id: Number(this.props.serverId)
        });
    }

    render() {
        const channelsList = Object
                                .values(this.props.channels)
                                .map((channel, index) =>
                                    <ChannelIndexItemContainer key={index} channel={channel} />
                                );
        
        return (
            <ul className="channelIndex">
                <button className="createChannel" onClick={this.createChannel}>+</button>
                {channelsList}
            </ul>
        );
    }
};

export default ChannelIndex;