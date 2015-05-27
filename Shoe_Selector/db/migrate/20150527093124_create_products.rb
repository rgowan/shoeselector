class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :image_url_large
      t.text :description
      t.text :url
      t.float :price_retail

      t.timestamps null: false
    end
  end
end
