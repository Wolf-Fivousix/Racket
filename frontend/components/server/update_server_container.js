import { connect } from "react-redux";
import UpdateServer from "./update_server";
import { updateServerName } from "../../actions/server_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    serverId: ownProps.serverId
});

const mapDispatchToProps = dispatch => ({
    updateServer: (serverId, name) => dispatch(updateServerName(serverId, name)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateServer);