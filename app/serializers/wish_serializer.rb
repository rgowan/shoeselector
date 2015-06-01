class WishSerializer < ActiveModel::Serializer
  has_many :products, except: [:wish]
  attributes :id, :name, :image_url_large, :description, :url, :price_retail
end
