class ProductSerializer < ActiveModel::Serializer
  has_one :wish, except: [:products]
  attributes :id, :name, :image_url_large, :description, :url, :price_retail, :likes, :dislikes

  def likes
    object.get_likes.size
  end

  def dislikes
    object.get_dislikes.size
  end
end
