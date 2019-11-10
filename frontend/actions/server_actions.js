import * as serverUtils from "../util/server_util";
export const CREATE_SERVER = "CREATE_SERVER";

const createNewServer = server => ({
    type: CREATE_SERVER,
    server
})

export const createServer = server => dispatch => (
    serverUtils.create(server)
        .then(server => dispatch(createNewServer(server)))
        .fail(errors => console.log(errors))
);