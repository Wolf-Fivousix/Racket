import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
        <form className="messageInputBox"
            onSubmit={sendMessage}
            >
            <input
                type="text"
                placeholder="Write here"
                className="defaultInput messageInput"
                onChange={handleMessageChange}
            />
            <button
                className="messageButton button"
                >
                Send
            </button>
        </form>
    );
}