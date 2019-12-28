import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { getAllMessages } from "../../actions/message_actions";

export default function MessageIndex(props) {
    const dispatch = useDispatch();
    const { history, match, location } = useReactRouter();

    useEffect(() => {
        dispatch(getAllMessages(match.params.channelId));
    });

    return (
        <div className="chat">
            <h1>GET RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKET</h1>
        </div>
    );
};