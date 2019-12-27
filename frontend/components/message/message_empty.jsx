import React from "react";

export default function MessageEmpty(pros) {
    return (
        <div className="noChannelSelected">
            <img className="noChannelImage" src="https://discordapp.com/assets/94b5558353f1d01035a874f6eddf6d70.svg" alt=""/>
            <h1>You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.</h1>
        </div>
    );
}