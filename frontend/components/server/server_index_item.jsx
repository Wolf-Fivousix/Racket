import React from "react";
import useReactRouter from "use-react-router";

export default function ServerIndexItem(props) {
    const server = props.server;
    const { history, location } = useReactRouter();

    function handleClick(e) {
        let servers = document.getElementsByClassName("serverIndexItemButton");
        for (let i = 0; i < servers.length; ++i) {
            servers[i].className="serverIndexItemButton";
        }
        e.target.className += " selectedServer";

        const address = `/servers/${server.id}`;
        if (!location.pathname.includes(address)) history.push(address);
    }

    // if (location.pathname.includes(address)) console.log(document.getElementById(server.id));
    // document.getElementById(server.id).classList.add("selectedServer");
    return(
        <div className="serverIndexItemBox" id={server.id}>
            <button
                className="serverIndexItemButton"
                onClick={handleClick}>
                    {server.name}
            </button>
        </div>
    );
};