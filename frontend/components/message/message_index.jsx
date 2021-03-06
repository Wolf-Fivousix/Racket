import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from 'use-react-router';
import { getAllMessages, receiveMessage } from "../../actions/message_actions";
import MessageInput from "./message_input";
import MembersIndex from "../members/members_index";
import AvatarImage from "../members/avatar_img";
import Youtube from "react-youtube";

export default function MessageIndex(props) {
    const messages = useSelector(state => state.entities.messages);
    const dispatch = useDispatch();
    const { match } = useReactRouter();
    const channelId = Number(match.params.channelId);

    useEffect(() => {
        dispatch(getAllMessages(channelId));
        App.messages = App.cable.subscriptions.create(
            {
                channel: "MessagesChannel",
                channelId: `${channelId}`
            },  
            {
                received: function(data) {
                    dispatch(receiveMessage(data.message));
                }
            }
        );

        return () => App.messages.unsubscribe();

    }, [channelId]);

    // Keeps the scroll bar at the most recent message.
    useEffect(() => {
        let scroller = document.getElementById("messageHistoryBox");
        if (scroller) scroller.scrollTop = scroller.scrollHeight;
    });

    function youtubeParser(url) {
        const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    function imageParser(url) {
        const formats = ["jpg", "jpeg", "png", "gif"];
        for (let i = 0; i < formats.length; ++i) {
            if (url.endsWith(formats[i])) {
                const regex = new RegExp("http[s]?:\/\/.+\." + formats[i], "g");
                const imageAddress = url.match(regex);
                return (<img src={imageAddress} alt="User Image" className="embedPreview"/>);
            }
        }
        return false;
    }

    const messagesList = Object.values(messages).map((message, index) =>
        <div className="textMessage" key={index}>
            {index ? <div className="messageDivider"></div> : <div></div>}
            <div className="messageMeat">
                <AvatarImage id={message.author_id} chat={true}/>
                <div>
                    <h2 className="messageHeader">
                        <p className="author">{`${message.author}`}</p>
                        <time className="timeStamp">{`${message.created_at}`}</time>
                    </h2>
                    <p className="messageBody">{message.body}</p>
                    {imageParser(message.body)}
                    {youtubeParser(message.body) && <Youtube videoId={youtubeParser(message.body)} opts={{height: "260", width: "426"}} containerClassName={"embedPreview"}/>}
                </div>
            </div>
        </div>
    );

    const channels = useSelector(state => state.entities.channels);
    const channelName = channels[channelId] ? channels[channelId].title : "";
    
    
    if (Object.values(channels).length === 0) return null;

    return (
        <div className="chat">
            <nav className="chatTitleHeader">
                <div className="chatTitleText">
                    <svg className="channelTitleIcon" viewBox="0 0 24 24"><path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                    <h1>{channelName}</h1>
                </div>
            </nav>
            <div className="messageHistory" id="messageHistoryBox">
                {messagesList}
            </div>
            <MessageInput channelId={channelId} channelName={channelName}/>
            <MembersIndex />
        </div>
    );
};