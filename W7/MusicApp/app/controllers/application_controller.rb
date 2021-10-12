class ApplicationController < ActionController::Base

    def current_user
        @current_user = user
    end

    def logged_in?
        
    end
end
