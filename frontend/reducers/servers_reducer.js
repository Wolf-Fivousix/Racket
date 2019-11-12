import { CREATE_SERVER } from "../actions/server_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case CREATE_SERVER:
            return Object.assign({}, action.server);
        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, )
        default:
            return state;
    }
};

export default serversReducer