import * as membershipUtils from "../util/membership_util";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";

const receiveMembership = membership => ({
    type: RECEIVE_MEMBERSHIP,
    membership
});

export const joinServer = serverId => dispatch => (
    membershipUtils.joinServer(serverId)
        .then(membership => dispatch(receiveMembership(membership)))
);