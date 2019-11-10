class ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        
        if @server.save
            render json: @server
        else
            render json: @server.errors.full_messages, status: 404
        end
    end

    private
    def server_params
        params.require(:server).permit(:name)
    end
end
