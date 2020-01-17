import React from "react";
import { useSelector } from "react-redux";
import AvatarImage from "./avatar_img";

export default function MembersIndex() {
    
    const members = Object.values(useSelector(state => state.entities.memberships))
                        .map((member, index) =>
                            <li className="memberPlate" key={index}>
                                <AvatarImage id={member.member_id}/>
                                <p className="memberName">{member.name.slice(0, 14) + `${member.name.length > 14 ? "..." : ""}`}</p>
                            </li>
                        );
 
    return (
        <ul className="membersList">
            {members}
        </ul>
    );
}