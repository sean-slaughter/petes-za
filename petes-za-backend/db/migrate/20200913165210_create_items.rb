class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.float :price
      t.belongs_to :menu
      t.timestamps
    end
  end
end
