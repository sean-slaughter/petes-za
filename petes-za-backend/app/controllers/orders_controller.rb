class OrdersController < ApplicationController
    def create
        order = Order.create(
            name: params[:name],
            address: params[:address],
            phone: params[:phone],
            email: params[:email],
            total: params[:total],
            item_ids: params[:item_ids]
        )
      
        if order.valid?
            render json: order, include: [items: {except: [:created_at, :updated_at, :menu_id]}]
        else
            render json: order.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
    end

    def edit
    end

    def update
    end

    def delete
    end
end
