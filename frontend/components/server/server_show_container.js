import { connect } from "react-redux";
import ServerShow from "./server_show";

const mapStateToProps = state => ({
    servers: state.entities.servers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);