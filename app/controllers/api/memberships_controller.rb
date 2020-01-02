class Api::MembershipsController < ApplicationController
    def index
        @memberships = Membership.where(server_id: params[:serverId]).includes(:member)

        render :memberships
    end

    def create
        @membership = Membership.new(membership_params)
        @membership.member_id = current_user.id

        if @membership.save
            render :membership
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
