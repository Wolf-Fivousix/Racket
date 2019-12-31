import React from "react";
import useReactRouter from "use-react-router";

export default function ServerIndexItem(props) {
    const server = props.server;
    const { history, location } = useReactRouter();

    function handleClick() {
        const address = `/servers/${server.id}`;
        if (!location.pathname.includes(address)) history.push(address);
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