import {
    CREATE_SERVER,
    RECEIVE_USER_SERVERS
} from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case CREATE_SERVER:
            return Object.assign({}, { [action.server.id]: action.server });
        
        case RECEIVE_USER_SERVERS:
            return Object.assign({}, action.servers);
            
        default:
            return state;
    }
};

export default serversReducer