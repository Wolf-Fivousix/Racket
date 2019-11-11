export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: "/servers/",
        data: { server }
    })
);

export const showServer = (serverId) => (
    $.ajax({
        method: "GET",
        url: `/servers/${serverId}`
    })
);

export const deleteServer = (serverId) => (
    $.ajax({
        method: "DELETE",
        url: `/servers/${serverId}`
    })
);