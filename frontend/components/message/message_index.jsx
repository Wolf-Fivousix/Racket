import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { getAllMessages } from "../../actions/message_actions";
import MessageInput from "./message_input";

export default function MessageIndex(props) {
    const messages = useSelector(state => state.entities.messages);
    const dispatch = useDispatch();
    const { match } = useReactRouter();

    useEffect(() => {
        dispatch(getAllMessages(match.params.channelId));
    }, [match.params.channelId]);

    const messagesList = Object.values(messages).map((message, index) =>
        <article className="textMessage">
            <p className="author">{`${message.author}: `}</p>
            <p>{message.body}</p>
        </article>
    );


    return (
        <div className="chat">
            <div className="messageHistory">
                <h1>Messages...</h1>
                {messagesList}
            </div>
            <MessageInput />
        </div>
    );
};