import React from "react";
import { useSelector } from "react-redux";
import AvatarImage from "./avatar_img";

export default function MembersIndex() {
    const members = Object.values(useSelector(state => state.entities.memberships))
                        .map((member, index) =>
                            <li className="memberPlate">
                                <AvatarImage />
                                <p className="memberName" key={index}>{member.name.slice(0, 14) + `${member.name.length > 14 ? "..." : ""}`}</p>
                            </li>
                        );
 
    return (
        <ul className="membersList">
            {members}
        </ul>
    );
}