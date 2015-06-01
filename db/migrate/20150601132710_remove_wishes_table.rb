class RemoveWishesTable < ActiveRecord::Migration
  def change
    drop_table :wishes
  end
end
