json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
    json.author message.author.username
end