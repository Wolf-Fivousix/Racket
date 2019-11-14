import React from "react";
import { Link } from "react-router-dom";

const temporaryComponent = () => (
    // {/* This will go inside the next component. */ }
    <div>
        <div className="channelList" >
            <h1 className="serverNameHeader">
                FAKE HOME CHANNEL
            </h1>
        </div >
        <div className="chat">
            <h1>PrivateMessages Display</h1>
            <h2>Get RACKEEETTTT! =D</h2>
            <img
                className="createServerImage"
                src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt="" />
        </div>
    </div>
);

export default temporaryComponent;