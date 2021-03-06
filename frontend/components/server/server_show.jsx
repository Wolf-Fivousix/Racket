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
        dispatch(getMembers(serverId));

        return () => {
            if (document.getElementById("serverMenuCheckBox").checked) toggleMenu();
        };
    }, [serverId]);

    function updateName() {
        dispatch(openModal(() => <UpdateServerContainer serverId={serverId} />));
    }

    function deleteSelf() {
        dispatch(deleteServer(serverId))
            .then(() => history.push("/servers/"))
    }

    function toggleMenu() {
        document.getElementById("serverMenuCheckBox").checked = !document.getElementById("serverMenuCheckBox").checked
        document.getElementsByClassName("serverNameHeader")[0].classList.toggle("openedDropDown");
    }

    if (!servers[serverId]) return <TemporaryComponent />;
    const title = servers[serverId].name.length < 24 ? servers[serverId].name : `${servers[serverId].name.slice(0,20)}...`;

    return (
        <div className="content">
            <div className="channelList" >
                <div className="serverNameHeader" onClick={toggleMenu}>
                    <h1>{title}</h1>
                    <input className="serverMenuCheckBox" id="serverMenuCheckBox" type="checkbox"/>
                    <svg className="serverMenuIcon"><path d="M0 0h18v18H0"></path><path stroke="currentColor" d="M4.5 4.5l9 9"></path><path stroke="currentColor" d="M13.5 4.5l-9 9"></path></svg>
                    <ul className="serverOptionsDropDown">
                        <li className="serverDropDownMenuEntry" onClick={updateName}>New Name</li>
                        <li className="serverDropDownMenuEntry" onClick={deleteSelf}>Delete this Server</li>
                    </ul>
                </div>
                <ChannelIndex serverId={serverId}/>
            </div >
            <MessageEmpty />
            <Route path="/servers/:serverId/:channelId" component={MessageIndex}/>
        </div>
    );
}