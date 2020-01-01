class Api::ServersController < ApplicationController
    def show
        # I think I dont need this at all! 19/12/2019
        # @server = current_user.servers.find_by(id: params[:id])
        # if @server
        #     render json: @server
        # else
        #     render json: ["Server not found"], status: 404
        # end
    end

    def index
        @servers = current_user.servers_membership

        render :servers
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        
        if @server.save
            render :server
        else
            render json: @server.errors.full_messages, status: 404
        end
    end

    def update
        @server = current_user.servers.find_by(id: params[:id])

        if @server.update(server_params)
            render :server
        else
            render json: @server.errors.full_messages, status: 404
        end
    end

    def destroy
        @server = current_user.servers.find_by(id: params[:id])
        if @server
            @server.destroy
            render json: @server.id
        else
            render json: ["Server non existent"], status: 404
        end
    end

    private
    def server_params
        params.require(:server).permit(:name)
    end
end
