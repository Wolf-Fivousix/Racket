export const CREATE_SERVER = "CREATE_SERVER";

const createNewServer = server => ({
    type: CREATE_SERVER,
    server
})

export const createServer = server => dispatch => (
    serverUtils.create(server)
        .then(server => console.log(server))
        .fail(errors => console.log(errors))
);