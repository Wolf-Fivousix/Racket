import React from "react";
import { useSelector } from "react-redux";

export default function MembersIndex() {
    const members = Object.values(useSelector(state => state.entities.memberships))
                        .map((member, index) =>
                            <li className="memberName" key={index}>{member.name}</li>
                        );

    return (
        <ul className="membersList">
            {members}
        </ul>
    );
}