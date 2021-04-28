class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: [:cart]
    end

    def create
        if User.find_by(name: user_params[:name])
            user = User.find_by(name: user_params[:name])
            redirect_to "api/v1/users/#{user.id}"
        else
            user = User.create(user_params)
            render json: user
        end
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end