import {
    RECEIVE_CHANNEL_MESSAGES,
    RECEIVE_NEW_MESSAGE
} from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            return Object.assign({}, action.messages);

        case RECEIVE_NEW_MESSAGE:
            return Object.assign({}, state, action.message);
            
        default:
            return state;
    }
};

export default messagesReducer;