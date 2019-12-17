class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all

        render :channels
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end
end
