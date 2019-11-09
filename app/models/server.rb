class Server < ApplicationRecord
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :owner,
    class_name: :User
end
