import {
    CREATE_CHANNEL,
    RECEIVE_SERVER_CHANNELS
} from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case CREATE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });

        case RECEIVE_SERVER_CHANNELS:
            return Object.assign({}, action.channels);

        default:
            return state;
    }
};

export default channelsReducer;