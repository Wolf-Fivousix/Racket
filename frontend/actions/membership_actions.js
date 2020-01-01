import * as membershipUtils from "../util/membership_util";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS";

const receiveMembership = membership => ({
    type: RECEIVE_MEMBERSHIP,
    membership
});

const receiveMembers = members => ({
    type: RECEIVE_MEMBERSHIP,
    members
});

export const joinServer = serverId => dispatch => (
    membershipUtils.joinServer(serverId)
        .then(membership => dispatch(receiveMembership(membership)))
);

export const getMembers = serverId => dispatch => (
    membershipUtils.getMembers(serverId)
        .then(members => dispatch(receiveMembers(members)))
);