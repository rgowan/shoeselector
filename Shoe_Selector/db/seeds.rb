require 'httparty'
# require 'pry'

popshops_url = 'http://api.popshops.com/v3/products.json'
catalog_key  = ENV['POPSHOPS_CATALOG_KEY']
api_key      = ENV['POPSHOPS_API_KEY']

response = HTTParty.get(popshops_url, query: {
  # Required
  catalog: catalog_key,
  account: api_key,

  # Optional
  results_per_page: 100,
  keyword: "nike",
  category: 25245
  })

products = response['results']['products']['product'].each do |product|
  product['offers']['offer'].each do |offer|

    options = {
      name: offer['name'],
      image_url_large: offer['image_url_large'],
      description: offer['description'],
      price_retail: offer['price_retail'],
      url: offer['url']
    }

    Product.create!(options)
  end
end