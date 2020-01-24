import * as messageUtils from "../util/message_util";
export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";

const receiveChannelMessages = messages => ({
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
});

const receiveNewMessage = message => ({
    type: RECEIVE_NEW_MESSAGE,
    message
});

export const getAllMessages = channelId => dispatch => (
    messageUtils.getAllMessages(channelId)
        .then(messages => dispatch(receiveChannelMessages(messages)))
        .fail(errors => console.log(errors))
        // .fail((errors) => dispatch(receiveChannelErrors(errors)));
);

export const createMessage = message => dispatch => (
    messageUtils.createMessage(message)
        .then(message => dispatch(receiveNewMessage(message)))
        .fail(errors => console.log(errors))
);

export const receiveMessage = message => dispatch => (
    dispatch(receiveNewMessage({ [message.id]: message }))
);