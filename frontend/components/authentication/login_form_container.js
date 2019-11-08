import { connect } from "react-redux";
import SessionForm from "./session_form";
import { loginUser, clearErrors} from "../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "LOGIN",
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  authentication: (user) => dispatch(loginUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);