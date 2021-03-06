export const createChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: "/api/channels",
        data: { channel }
    })
);

export const getAllChannels = (serverId) => (
    $.ajax({
        method: "GET",
        url: "/api/channels",
        data: { serverId }
    })
);

export const destroyChannel = channelId => (
    $.ajax({
        method: "DELETE",
        url: `/api/channels/${channelId}`,
    })
);