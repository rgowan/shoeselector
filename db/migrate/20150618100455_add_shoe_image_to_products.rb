class AddShoeImageToProducts < ActiveRecord::Migration
  def change
    add_column :products, :shoe_image, :string
  end
end
