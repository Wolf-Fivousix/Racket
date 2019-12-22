import {
    CREATE_CHANNEL,
    RECEIVE_SERVER_CHANNELS,
    DESTROY_CHANNEL
} from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case CREATE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });

        case RECEIVE_SERVER_CHANNELS:
            return Object.assign({}, action.channels);

        case DESTROY_CHANNEL:
            let newState = Object.assign({}, state);
            delete newState[action.channelId];
            return newState;

        default:
            return state;
    }
};

export default channelsReducer;