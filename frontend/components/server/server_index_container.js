import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import ServerIndex from "./server_index";
import { openModal, closeModal } from "../../actions/modal_actions";
import {
    getUserServers
} from "../../actions/server_actions";

const mapStateToProps = state => ({
    userId: Object.values(state.entities.user)[0].id,
    servers: state.entities.servers
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    getUserServers: (userId) => dispatch(getUserServers(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);