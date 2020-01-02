json.set! membership.id do
    json.extract! membership, :id, :server_id, :member_id
    json.name membership.member.username
end