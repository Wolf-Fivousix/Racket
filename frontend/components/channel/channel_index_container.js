import { connect } from "react-redux";
import { getAllChannels } from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";

const mapStateToProps = state => ({
    channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
    getAllChannels: (serverId) => dispatch(getAllChannels(serverId))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);