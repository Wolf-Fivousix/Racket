import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateServerForm from "./create_server_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { createServer } from "../../actions/server_actions";
import { createChannel } from "../../actions/channel_actions";

const mapStateToProps = state => ({
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    createServer: (serverName) => dispatch(createServer(serverName)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateServerForm));