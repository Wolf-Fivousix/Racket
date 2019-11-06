import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUpUser } from "../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "SIGNUP",
});

const mapDispatchToProps = dispatch => ({
  authentication: (user) => dispatch(signUpUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);