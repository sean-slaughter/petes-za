class ItemsController < ApplicationController
    def show
        item = Item.find_by(id: params[:id])
        render json: item, except: [:created_at, :updated_at, :menu_id]
    end
end
