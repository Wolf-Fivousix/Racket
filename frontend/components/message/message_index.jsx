import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from 'use-react-router';
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
        <div className="textMessage" key={index}>
            {index ? <div className="messageDivider"></div> : <div></div>}
            <h2 className="messageHeader">
                <p className="author">{`${message.author}`}</p>
                <time className="timeStamp">{`${message.created_at}`}</time>
            </h2>

            <p className="messageBody">{message.body}</p>
        </div>
    );

    return (
        <div className="chat">
            <div className="messageHistory">
                <h1>Messages...</h1>
                {messagesList}
            </div>
            <div className="messageInputDivider"></div>
            <MessageInput channelId={match.params.channelId}/>
        </div>
    );
};