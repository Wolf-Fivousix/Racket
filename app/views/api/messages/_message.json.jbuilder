json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body, author_name: message.author.name
end