import React from "react";
import { useDispatch } from "react-redux";
import useReactRouter from "use-react-router";

export default function ServerIndexItem(props) {
    const server = props.server;
    const dispatch = useDispatch();
    const { history } = useReactRouter();

    function handleClick() {
        history.push(`/servers/${server.id}`);
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