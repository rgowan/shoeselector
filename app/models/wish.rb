class Wish < ActiveRecord::Base
  has_many :products through :users
end
