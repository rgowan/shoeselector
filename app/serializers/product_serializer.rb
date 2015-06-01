class ProductSerializer < ActiveModel::Serializer
  has_one :wish, except: [:products]
  attributes :id, :name, :image_url_large, :description, :url, :price_retail
end
