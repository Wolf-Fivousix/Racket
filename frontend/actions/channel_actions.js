import * as channelUtils from "../util/channel_util";
export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const RECEIVE_SERVER_CHANNELS = "RECEIVE_SERVER_CHANNELS";

const createNewChannel = channel => ({
    type: CREATE_CHANNEL,
    channel
});

const receiveChannelErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

const receiveServerChannels = channels => ({
    type: RECEIVE_SERVER_CHANNELS,
    channels
});

export const createChannel = channel => dispatch => (
    channelUtils.createChannel(channel)
        .then((channel) => dispatch(createNewChannel(channel)))
        .fail((errors) => dispatch(receiveChannelErrors(errors)))
);

export const getAllChannels = serverId => dispatch => (
    channelUtils.getAllChannels(serverId)
        .then((channels) => dispatch(receiveServerChannels(channels)))
        .fail((errors) => dispatch(receiveChannelErrors(errors)))
);