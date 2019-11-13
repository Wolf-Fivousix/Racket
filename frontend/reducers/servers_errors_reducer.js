import {
    RECEIVE_SERVERS_ERRORS,
    CLEAR_ERRORS
} from "../actions/server_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const serversErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SERVERS_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];
        
        case CLOSE_MODAL:
            return [];

        default:
            return state;
    }
};

export default serversErrorsReducer;