import { connect } from "react-redux";
import ServerShow from "./server_show";
import { getServer, deleteServer } from "../../actions/server_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    servers: state.entities.servers
});

const mapDispatchToProps = dispatch => ({
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    getServer: (serverId) => dispatch(getServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);