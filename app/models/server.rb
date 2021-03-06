class Server < ApplicationRecord
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :owner,
    class_name: :User
  has_many :channels, dependent: :destroy
  has_many :memberships,  dependent: :destroy
  has_many :members, through: :memberships
end
