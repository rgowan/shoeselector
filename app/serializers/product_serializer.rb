class ProductSerializer < ActiveModel::Serializer
  has_one :wish, except: [:products]
  attributes :id, :name, :image_url_large, :description, :url, :price_retail, :likes, :dislikes, :image_url_thumb

  def likes
    object.get_likes.size
  end

  def dislikes
    object.get_dislikes.size
  end

  def image_url_thumb
    object.image_url_large.thumb.url
  end
end
