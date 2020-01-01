import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import useReactRouter from "use-react-router";
import { getServer, deleteServer } from "../../actions/server_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import UpdateServerContainer from "./update_server_container";
import TemporaryComponent from "./temporary_component";
import ChannelIndex from "../channel/channel_index";
import MessageIndex from "../message/message_index";
import MessageEmpty from "../message/message_empty";

// Then whenever the server is swapped, it should fetch the memberships for this specific server.
// Once they display correctly in the state, move to create the MEMBERS COMPONENT.
export default function ServerShow(props) {
    const servers = useSelector(state => state.entities.servers);
    const dispatch = useDispatch();
    const { match, history } = useReactRouter();
    const serverId = match.params.serverId;

    function updateName() {
        dispatch(openModal(() => <UpdateServerContainer serverId={serverId} />));
    }

    function deleteSelf() {
        dispatch(deleteServer(serverId))
            .then(() => history.push("/servers/"))
            .fail(() => console.log("You don't own this server! Get OOOOOUT!"));
    }

    if (!servers[serverId]) return <TemporaryComponent />;

    return (
        <div className="content">
            <div className="channelList" >
                <h1 className="serverNameHeader">
                    {servers[serverId].name}
                </h1>
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