class Channel < ApplicationRecord
    validates :server_id, presence: true
    validates :title, presence: true

    belongs_to :server
end
