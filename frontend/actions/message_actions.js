import * as messageUtils from "../util/message_util";
export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";

const receiveChannelMessages = messages => ({
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
});

export const getAllMessages = channelId => dispatch => (
    messageUtils.getAllMessages(channelId)
        .then(messages => dispatch(receiveChannelMessages(messages)))
        .fail(errors => console.log(errors))
        // .fail((errors) => dispatch(receiveChannelErrors(errors)));
);