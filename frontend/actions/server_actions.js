import * as serverUtils from "../util/server_util";
export const CREATE_SERVER = "CREATE_SERVER";
export const RECEIVE_SERVERS_ERRORS = "RECEIVE_SERVERS_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER_SERVERS = "RECEIVE_USER_SERVERS";
export const RECEIVE_CURRENT_SERVER = "RECEIVE_CURRENT_SERVER";
export const DESTROY_SERVER = "DESTORY_SERVER";
export const UPDATE_SERVER = "UPDATE_SERVER";

const createNewServer = server => ({
    type: CREATE_SERVER,
    server
});

const receiveServersErrors = (errors) => ({
    type: RECEIVE_SERVERS_ERRORS,
    errors
});

const receiveUserServers = (servers) => ({
    type: RECEIVE_USER_SERVERS,
    servers
});

const receiveCurrentServer = (server) => ({
    type: RECEIVE_CURRENT_SERVER,
    server
});

const destroyServer = (serverId) => ({
    type: DESTROY_SERVER,
    serverId
});

export const createServer = server => dispatch => (
    serverUtils.createServer(server)
        .then(server => dispatch(createNewServer(server)))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const getServer = serverId => dispatch => (
    serverUtils.getServer(serverId)
        .then(server => dispatch(receiveCurrentServer(server)))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const deleteServer = serverId => dispatch => (
    serverUtils.deleteServer(serverId)
        .then(serverId => dispatch(destroyServer(serverId)))
        .fail(errors => dispatch(receiveServersErrors(errors)))
);

export const getUserServers = userId => dispatch => (
    serverUtils.getUserServers(userId)
        .then(servers => dispatch(receiveUserServers(servers)))
);

export const updateServerName = (serverId, name) => dispatch => (
    serverUtils.updateServer(serverId, name)
        .then((server) => dispatch(receiveCurrentServer(server)))
        .fail((errors) => console.log(`update FAILED : ${errors}`))
);