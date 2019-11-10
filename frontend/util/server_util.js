export const create = (server) => (
    $.ajax({
        method: "POST",
        url: "/servers/",
        data: { server }
    })
);