import React from "react";
import { Link } from "react-router-dom";

const temporaryComponent = () => (
    // {/* This will go inside the next component. */ }
    <Link to="/servers/">
        <div className="channelList" >FAKE HOME CHANNEL</div >
        <div className="chat">
            <h1>PrivateMessages Display</h1>
            <h2>Get RACKEEETTTT! =D</h2>
            <img
                className="createServerImage"
                src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt="" />
        </div>
    </Link>
);

export default temporaryComponent;