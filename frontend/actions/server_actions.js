import * as serverUtils from "../util/server_util";
export const CREATE_SERVER = "CREATE_SERVER";
export const RECEIVE_SERVERS_ERRORS = "RECEIVE_SERVERS_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER_SERVERS = "RECEIVE_USER_SERVERS";

const createNewServer = server => ({
    type: CREATE_SERVER,
    server
})

const receiveServersErrors = (errors) => ({
    type: RECEIVE_SERVERS_ERRORS,
    errors
});

const receiveUserServers = (servers) => ({
    type: RECEIVE_USER_SERVERS,
    servers
});
// const showServer
// const deleteServer

export const createServer = server => dispatch => (
    serverUtils.createServer(server)
        .then(server => dispatch(createNewServer(server)))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const showServer = serverId => dispatch => (
    serverUtils.showServer(serverId)
        .then(server => console.log(server))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const deleteServer = serverId => dispatch => (
    serverUtils.deleteServer(serverId)
        .then(server => console.log(server))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const getUserServers = userId => dispatch => (
    serverUtils.getUserServers(userId)
        // .then(servers => dispatch(receiveUserServers(servers)))
        .then(servers => console.log(servers))
);