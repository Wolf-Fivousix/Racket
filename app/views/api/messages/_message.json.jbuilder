json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
    json.created_at "#{message.created_at.month}/#{message.created_at.day}/#{message.created_at.year}"
    json.author message.author.username
end