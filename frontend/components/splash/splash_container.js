import { connect } from "react-redux";
import Splash from "./splash";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);