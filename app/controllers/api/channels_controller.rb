class Api::ChannelsController < ApplicationController
    def index
        @channels = Server.find_by(id: params["serverId"].to_i).channels

        render :channels
    end

    def show
    end

    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render :channel
        else
            render json: @channel.errors.full_messages, status: 404
        end
    end

    def update
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy!
            render json: @channel.id
        else
            render json: @channel.errors.full_messages, status: 404
        end
    end

    def channel_params
        params.require(:channel).permit(:server_id, :title)
    end
end
