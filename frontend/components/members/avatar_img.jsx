import React from "react"

export default function AvatarImage(props) {
    const avatars = [
        "https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png",
        "https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png",
        "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png",
        "https://discordapp.com/assets/1cbd08c76f8af6dddce02c5138971129.png",
        "https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png"
    ]

    return (
        <img className="avatarImage" src={avatars[props.id]} alt="Member Avatar"/>
    );
}