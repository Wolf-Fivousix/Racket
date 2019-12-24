import ChannelIndexItem from "./channel_index_item";
import { connect } from "react-redux";
import {
    destroyChannel
} from "../../actions/channel_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    destroyChannel: (channelId) => dispatch(destroyChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem);