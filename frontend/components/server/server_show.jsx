import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import useReactRouter from "use-react-router";
import { getServer, deleteServer } from "../../actions/server_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { getMembers } from "../../actions/membership_actions";
import UpdateServerContainer from "./update_server_container";
import TemporaryComponent from "./temporary_component";
import ChannelIndex from "../channel/channel_index";
import MessageIndex from "../message/message_index";
import MessageEmpty from "../message/message_empty";

export default function ServerShow(props) {
    const servers = useSelector(state => state.entities.servers);
    const dispatch = useDispatch();
    const { match, history } = useReactRouter();
    const serverId = match.params.serverId;

    useEffect(() => {
        dispatch(getMembers(serverId))
    }, [serverId]);

    function updateName() {
        dispatch(openModal(() => <UpdateServerContainer serverId={serverId} />));
    }

    function deleteSelf() {
        dispatch(deleteServer(serverId))
            .then(() => history.push("/servers/"))
    }

    if (!servers[serverId]) return <TemporaryComponent />;
    const title = servers[serverId].name.length < 24 ? servers[serverId].name : `${servers[serverId].name.slice(0,20)}...`;

    return (
        <div className="content">
            <div className="channelList" >
                <div className="serverNameHeader">
                    <h1>{title}</h1>
                    <input  className="serverMenuCheckBox" type="checkbox"/>
                    <ul className="serverOptionsDropDown">
                        <li>um</li>
                        <li>dois</li>
                        <li>tres</li>
                    </ul>

                </div>
                <ChannelIndex serverId={serverId}/>
                <button
                    className="updateButton button"
                    onClick={updateName}>
                    New Name
                </button>
                <button
                    className="deleteButton button"
                    onClick={deleteSelf}>
                    DESTROY!
                </button>
            </div >
            <MessageEmpty />
            <Route path="/servers/:serverId/:channelId" component={MessageIndex}/>
        </div>
    );
}