class MenusController < ApplicationController
    def index
        menus = Menu.all
        render json: menus, include: [:items, except: [:created_at, :updated_at]]
    end
end
