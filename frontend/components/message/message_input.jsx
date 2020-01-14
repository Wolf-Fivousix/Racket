import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../actions/message_actions";

export default function MessageInput(props) {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    
    function handleMessageChange(e) {
        setMessage(e.target.value);
    }
    
    function sendMessage() {
        const fullMessage = {
            channel_id: props.channelId,
            body: message
        };
        dispatch(createMessage(fullMessage))
        .then(() => setMessage(""));
    }

    return (
        <div className="messageInputContainer">
            <div className="messageInputDivider"></div>
            <form className="messageInputForm"
                onSubmit={sendMessage}
                >
                <input
                    type="text"
                    placeholder={`Message #${props.channelName}`}
                    className="messageInput"
                    onChange={handleMessageChange}
                    value={message}
                />
            </form>
        </div>
    );
}