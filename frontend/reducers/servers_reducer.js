import { CREATE_SERVER } from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case CREATE_SERVER:
            return Object.assign({}, action.server);
        default:
            return state;
    }
};

export default serversReducer