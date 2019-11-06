import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import ServerIndex from "./server_index";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);