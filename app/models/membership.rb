class Membership < ApplicationRecord
    validates :server_id, :member_id, presence: true
    validates :member_id, uniqueness: { scope: :server_id, message: "You are already in this server" }

    belongs_to :member, class_name: :User
    belongs_to :server
end
