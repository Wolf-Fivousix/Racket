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