export const joinServer = membership => (
    $.ajax({
        method: "POST",
        url: "/api/memberships/",
        data: { membership }
    })
);