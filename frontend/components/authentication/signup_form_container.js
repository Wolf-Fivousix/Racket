import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUpUser, clearErrors } from "../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "SIGNUP",
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  authentication: (user) => dispatch(signUpUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);