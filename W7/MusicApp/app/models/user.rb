class User < ApplicationRecord
    before_validation :ensure_session_token
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: { message: 'Password cannot be blank' }
    validates :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_pasword?(password) ? user : nil
    end




    def reset_session_token!
        session[:session_token] = User.generate_session_token
        self.save!
        self.session_token
    end


    

    def password=(password)
        @password = password
        self.password_digest = BCrypt::password.create(password)
    end

    def is_password?(password)
        Bcrypt::Password.new(self.password_digest).is_password?(password)
    end

    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
