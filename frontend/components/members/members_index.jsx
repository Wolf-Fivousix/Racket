import React from "react";
import { useSelector } from "react-redux";
import AvatarImage from "./avatar_img";

export default function MembersIndex() {
    const members = Object.values(useSelector(state => state.entities.memberships))
                        .map((member, index) =>
                            // <li className="memberName" key={index}>{member.name.slice(0, 19)}</li>
                            <AvatarImage />
                        );
 
    return (
        <ul className="membersList">
            {members}
        </ul>
    );
}