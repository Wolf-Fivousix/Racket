import React from "react";
import useReactRouter from "use-react-router";

export default function ServerIndexItem(props) {
    const server = props.server;
    const { history, location } = useReactRouter();

    function handleClick(e) {
        removeSelectedClass();
        e.target.className += " selectedServer";

        const address = `/servers/${server.id}`;
        if (!location.pathname.includes(address)) history.push(address);
    }

    function removeSelectedClass() {
        let servers = document.getElementsByClassName("serverIndexItemButton");
        for (let i = 0; i < servers.length; ++i) {
            if(servers[i].className.includes(" selectedServer")) {
                servers[i].className = servers[i].className.replace(" selectedServer", "");
            }
        }
    }

    return(
        <div className="serverIndexItemBox">
            <button
                className="serverIndexItemButton"
                onClick={handleClick}>
                    {server.name}
            </button>
        </div>
    );
};