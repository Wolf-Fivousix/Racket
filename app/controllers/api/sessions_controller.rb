class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login(user)
      render json: user
    else
      render json: "Username and/or Password invalid", status: 404
    end

  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: "No user logged in", status: 404
    end
  end
end