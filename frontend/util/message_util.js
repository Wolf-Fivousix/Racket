export const getAllMessages = (channelId) => (
    $.ajax({
        method: "GET",
        url: "/api/messages",
        data: { channelId }
    })
);

export const createMessage = message => (
    $.ajax({
        method: "POST",
        url: "/api/messages",
        data: { message }
    })
);