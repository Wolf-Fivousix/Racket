import {
    RECEIVE_MEMBERSHIP,
    RECEIVE_MEMBERS
} from "../actions/membership_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_MEMBERSHIP:
            return Object.assign({}, state, { [action.membership.id]: action.membership });

        case RECEIVE_MEMBERS:
            return Object.assign({}, action.members);

        default:
            return state;
    }
};

export default channelsReducer;