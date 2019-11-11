import * as serverUtils from "../util/server_util";
export const CREATE_SERVER = "CREATE_SERVER";

const createNewServer = server => ({
    type: CREATE_SERVER,
    server
})

// const showServer
// const deleteServer

export const createServer = server => dispatch => (
    serverUtils.createServer(server)
        .then(server => dispatch(createNewServer(server)))
        .fail(errors => console.log(errors))
);

export const showServer = serverId => dispatch => (
    serverUtils.showServer(serverId)
        .then(server => console.log(server))
        .fail(errors => console.log(errors.responseText))
);

export const deleteServer = serverId => dispatch => (
    serverUtils.deleteServer(serverId)
        .then(server => console.log(server))
        .fail(errors => console.log(errors.responseText))
);