class User < ActiveRecord::Base
  acts_as_voter
  has_one :wish
  has_many :products, through: :wish

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :omniauthable


  def self.find_for_oauth(auth, signed_in_resource = nil)
    identity = Identity.find_for_oauth(auth)
    user = signed_in_resource ? signed_in_resource : identity.user
    user = create_user(auth) if user.nil?
    # Associate the identity with the user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end

    user
  end

  private
  def self.create_user(auth)
    # Get the existing user by email if the provider gives us a verified email.
    # If no verified email was provided we assign a temporary email and ask the
    # user to verify it on the next step via UsersController.finish_signup
    email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
    email = auth.info.email if email_is_verified

    # Select a user if they have already registered
    user = User.find_by_email(email) if email

    # Create the user if it's a new registration
    if user.nil?
      user = User.new(
        name: auth.extra.raw_info.name,
        image: auth.info.image || "",
        email: email ? email : "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com",
        password: Devise.friendly_token[0,20]
      )
      # If you use confirmable module 
      # user.skip_confirmation!
      user.save!
    end

    user
  end
end

