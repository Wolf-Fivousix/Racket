import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import ServerIndex from "./server_index";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);