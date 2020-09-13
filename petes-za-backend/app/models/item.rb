class Item < ApplicationRecord
    has_many :order_items
    has_many :orders, through: :order_items
    belongs_to :menu
end
