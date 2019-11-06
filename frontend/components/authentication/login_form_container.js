import { connect } from "react-redux";
import SessionForm from "./session_form";
import { loginUser } from "../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "LOGIN",
});

const mapDispatchToProps = dispatch => ({
  authentication: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);