class Api::MessagesController < ApplicationController
    def index
        @messages = Channel.find_by(id: params["channelId"].to_i).messages
        
        render :messages
    end

    def create
        @message = Message.new(message_params)

        if @message.save
            render :message
        else
            render json: @message.errors.full_messages, status: 404
        end
    end

    def update
    end

    def destroy
    end

    def message_params
        params.require(:message).permit(:author_id, :channel_id, :body)
    end
end
