import React from "react";
import useReactRouter from "use-react-router";
import * as helper from "../../util/helper_methods";

export default function ServerIndexItem(props) {
    const server = props.server;
    const { history, location } = useReactRouter();

    function handleClick(e) {
        helper.removeSelected();
        const address = `/servers/${server.id}`;
        if (!location.pathname.includes(address)) history.push(address);
    }

    // Add "selected" class to current server.
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
            {/* <p className="serverIndexItemName">{server.name}</p> */}
        </li>
    );
};