class SessionsController < ApplicationController

    def create
        session[:session_token] = user.reset_session_token!
        redirect_to new_session_url
    end

end