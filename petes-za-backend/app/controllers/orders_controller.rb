class OrdersController < ApplicationController
    def create
        items = get_items
        order = Order.create(
            name: params[:name],
            address: params[:address],
            phone: params[:phone],
            email: params[:email],
            total: params[:total],
            items: items
        )
        if order.valid?
            render json: order, include: [items: {except: [:created_at, :updated_at, :menu_id]}] 
        else
            render json: order.errors.full_messages, status: :unprocessable_entity
        end
    end


    def delete
        order = Order.find(id: params[:id]);
        if order.destroy
            render json: {status: :ok}
        else
            render json: {status: :unprocessable_entity}
        end
    end


    private


    def get_items
        items = params[:items].map do |item|
            i = Item.find(item[:id])
            i.quantity = item[:quantity]
            i
        end
        return items
    end
end
