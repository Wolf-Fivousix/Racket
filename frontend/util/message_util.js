export const getAllMessages = (channelId) => (
    $.ajax({
        method: "GET",
        url: "/api/messages",
        data: { channelId }
    })
);