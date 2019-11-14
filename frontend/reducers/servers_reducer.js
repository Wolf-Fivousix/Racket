import {
    CREATE_SERVER,
    RECEIVE_USER_SERVERS,
    RECEIVE_CURRENT_SERVER,
    DESTROY_SERVER
} from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case CREATE_SERVER:
            return Object.assign({}, state, { [action.server.id]: action.server });
        
        case RECEIVE_USER_SERVERS:
            return Object.assign({}, action.servers);
            
        case RECEIVE_CURRENT_SERVER:
            return Object.assign({}, state, { [action.server.id]: action.server });

        case DESTROY_SERVER:
            let newState = Object.assign({}, state);
            delete newState[action.serverId];
            return newState;

        default:
            return state;
    }
};

export default serversReducer