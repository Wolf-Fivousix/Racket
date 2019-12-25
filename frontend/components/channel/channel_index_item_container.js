import ChannelIndexItem from "./channel_index_item";
import { connect } from "react-redux";
import {
    destroyChannel
} from "../../actions/channel_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    destroyChannel: (channelId) => dispatch(destroyChannel(channelId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem);