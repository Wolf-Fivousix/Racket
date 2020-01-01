class Api::MembershipsController < ApplicationController
    def index
    end

    def create
        @membership = Membership.new(membership_params)
        @membership.member_id = current_user.id

        if @membership.save
            render json: @membership
        else
            render json: @membership.errors.full_messages, status: 404
        end
    end

    def destroy
    end

    def membership_params
        params.require(:membership).permit(:server_id)
    end
end
