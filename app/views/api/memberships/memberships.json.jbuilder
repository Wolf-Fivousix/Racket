@memberships.each do |member|
    json.set! member.id do
        json.partial! "api/memberships/membership", membership: member
    end
end