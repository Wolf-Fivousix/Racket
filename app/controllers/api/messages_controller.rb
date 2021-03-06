class Api::MessagesController < ApplicationController
    def index
        @messages = Channel.find_by(id: params["channelId"].to_i).messages.includes(:author)
        
        render :messages
    end

    def create
        @message = Message.new(message_params)
        @message.author = current_user

        if @message.save
            ActionCable.server.broadcast(
                "messages#{@message.channel_id}",
                message: JSON.parse(ApplicationController.render(
                    partial: "api/messages/message",
                    locals: { message: @message }
                ))
            )

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
