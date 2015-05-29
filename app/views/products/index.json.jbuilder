json.array!(@products) do |product|
  json.extract! product, :id, :name, :image_url_large, :description, :url, :price_retail
  json.url product_url(product, format: :json)
end
