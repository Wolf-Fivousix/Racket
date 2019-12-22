import { connect } from "react-redux";
import {
    getAllChannels,
    createChannel,
    destroyChannel
} from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";

const mapStateToProps = state => ({
    channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
    getAllChannels: (serverId) => dispatch(getAllChannels(serverId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    destroyChannel: (channelId) => dispatch(destroyChannel(channelId))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);