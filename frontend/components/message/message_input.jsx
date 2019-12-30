import React from "react";

export default function MessageInput() {

    return (
        <form className="messageInputBox">
            <input
                type="text"
                placeholder="Write here"
                className="messageInput defaultInput"
            />
            <button
                className="messageButton button"
                >
                Send
            </button>
        </form>
    );
}