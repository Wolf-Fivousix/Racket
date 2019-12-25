class Message < ApplicationRecord
    validates :author_id, :channel_id, :body, presence: true

    belongs_to :author, class_name: :User
    belongs_to :channel
end
