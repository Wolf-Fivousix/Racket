import { connect } from "react-redux";
import NewServerForm from "./new_server_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewServerForm);