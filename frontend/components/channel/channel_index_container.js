import { connect } from "react-redux";
import {
    getAllChannels,
    createChannel,
    destroyChannel
} from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
    getAllChannels: (serverId) => dispatch(getAllChannels(serverId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    destroyChannel: (channelId) => dispatch(destroyChannel(channelId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);