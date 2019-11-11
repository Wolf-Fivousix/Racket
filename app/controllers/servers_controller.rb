class ServersController < ApplicationController
    def show
        @server = Server.find_by(id: params[:id])
        if @server
            render json: @server
        else
            render json: "Server not found", status: 404
        end
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        
        if @server.save
            render json: @server
        else
            render json: @server.errors.full_messages, status: 404
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if @server
            @server.delete
            render json: @server
        else
            render json: "Server non existent", status: 404
        end
    end

    private
    def server_params
        params.require(:server).permit(:name)
    end
end
