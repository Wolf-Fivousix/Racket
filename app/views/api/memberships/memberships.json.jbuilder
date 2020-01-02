@memberships.each do |member|
    json.partial! "api/memberships/membership", membership: member
end