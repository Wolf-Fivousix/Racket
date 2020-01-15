import React from "react";
import useReactRouter from "use-react-router";

export default function ServerIndexItem(props) {
    const server = props.server;
    const { history, location } = useReactRouter();

    function handleClick(e) {
        const address = `/servers/${server.id}`;
        if (!location.pathname.includes(address)) history.push(address);
    }

    let classes = "serverIndexItemButton";
    const idsArray = location.pathname.match(/\d+/g);
    const id = idsArray ? Number(idsArray[0]) : false;
    if (id === server.id) classes += " selectedServer";

    return(
        <li className="serverIndexItemBox">
            <button
                className={classes}
                onClick={handleClick}>
                    {server.name[0].toUpperCase()}
            </button>
        </li>
    );
};