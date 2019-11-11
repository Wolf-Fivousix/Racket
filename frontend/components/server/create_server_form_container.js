import { connect } from "react-redux";
import CreateServerForm from "./create_server_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { createServer } from "../../actions/server_actions";

const mapStateToProps = state => ({
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    createServer: (serverName) => dispatch(createServer(serverName)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);