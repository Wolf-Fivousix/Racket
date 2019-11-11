import {
    RECEIVE_SERVERS_ERRORS,
    CLEAR_ERRORS
} from "../actions/server_actions";

const serversErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SERVERS_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];

        default:
            return state;
    }
};

export default serversErrorsReducer;