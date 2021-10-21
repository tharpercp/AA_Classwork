class UsersController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            redirect_to users_url
        else
            render :new
        end
    end

    def show
        @email = User.email
        render :show
    end

end