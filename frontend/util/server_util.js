export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: "/api/servers/",
        data: { server }
    })
);

export const getServer = (serverId) => (
    $.ajax({
        method: "GET",
        url: `/api/servers/${serverId}`
    })
);

export const deleteServer = (serverId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/servers/${serverId}`
    })
);

export const getUserServers = (ownerId) => (
    $.ajax({
        method: "GET",
        url: "/api/servers/",
        data: { ownerId }
    })
);

export const updateServer = (serverId, name) => (
    $.ajax({
        method: "PATCH",
        url: `/api/servers/${serverId}`,
        data: { server: { name } }
    })
)