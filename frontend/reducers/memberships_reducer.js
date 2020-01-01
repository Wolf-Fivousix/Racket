import {
    RECEIVE_MEMBERSHIP
} from "../actions/membership_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_MEMBERSHIP:
            return Object.assign({}, state, action.membership);

        default:
            return state;
    }
};

export default channelsReducer;