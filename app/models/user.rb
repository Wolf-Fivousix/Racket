class User < ApplicationRecord
  validates :email, :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 1 }, allow_nil: true

  attr_reader :password
  
  after_initialize :ensure_session_token

  has_many :servers, foreign_key: :owner_id, dependent: :destroy
  has_many :messages, foreign_key: :author_id, dependent: :destroy
  has_many :memberships, foreign_key: :member_id, dependent: :destroy
  has_many :servers_membership, through: :memberships, source: :server

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
