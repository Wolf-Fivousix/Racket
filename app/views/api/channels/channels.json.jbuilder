@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :server_id, :title
    end
end