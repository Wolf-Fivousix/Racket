export const joinServer = serverId => (
    $.ajax({
        method: "POST",
        url: "/api/memberships/",
        data: { membership: { server_id: serverId } }
    })
);

export const getMembers = serverId => (
    $.ajax({
        method: "GET",
        url: "/api/memberships/",
        data: { serverId }
    })
);