import { connect } from "react-redux";
import CreateChannel from "./channel_options";
import { createChannel } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => ({
    serverId: ownProps.serverId
});

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);