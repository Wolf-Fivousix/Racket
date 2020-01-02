import React from "react";
import { useSelector } from "react-redux";

export default function MembersIndex() {
    const members = Object.values(useSelector(state => state.entities.memberships))
                        .map((member, index) =>
                            <li key={index}>{member.member_id}</li>
                        );

    return (
        <ul className="membersList">
            {members}
        </ul>
    );
}