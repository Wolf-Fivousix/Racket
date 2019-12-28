import * as messageUtils from "../util/message_util";
export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";

const receiveChannelMessages = channelId => ({
    type: RECEIVE_CHANNEL_MESSAGES,
    channelId
});

export const getAllMessages = channelId => dispatch => (
    messageUtils.getAllMessages(channelId)
        .then((res) => console.log("done: ", res))
        .fail(errors => console.log(errors))
        // .fail((errors) => dispatch(receiveChannelErrors(errors)));
);