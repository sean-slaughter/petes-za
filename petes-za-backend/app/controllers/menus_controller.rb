class MenusController < ApplicationController
    def index
        menus = Menu.all
        render json: menus, except: [:created_at, :updated_at], include: [items: {except: [:created_at, :updated_at, :menu_id]}]
    end
end
