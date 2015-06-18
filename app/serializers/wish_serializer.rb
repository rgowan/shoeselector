class WishSerializer < ActiveModel::Serializer
  has_many :products, except: [:wish]
  attributes :id, :name, :image_url_large, :description, :url, :price_retail, :image_url_thumb

  def image_url_thumb
    object.image_url_large.thumb.url
  end
end
