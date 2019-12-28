import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { getAllMessages } from "../../actions/message_actions";

export default function MessageIndex(props) {
    const messages = useSelector(state => state.entities.messages);
    const dispatch = useDispatch();
    const { history, match, location } = useReactRouter();

    useEffect(() => {
        dispatch(getAllMessages(match.params.channelId));
    }, [match.params.channelId]);

    const messagesList = Object.values(messages).map((message, index) =>
        <p>{message.body}</p>
    );


    return (
        <div className="chat">
            <h1>Messages...</h1>
            {messagesList}
        </div>
    );
};