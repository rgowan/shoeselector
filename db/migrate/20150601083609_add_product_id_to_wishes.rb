class AddProductIdToWishes < ActiveRecord::Migration
  def change
    add_column :wishes, :product_id, :integer
  end
end
