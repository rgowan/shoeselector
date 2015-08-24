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
  keyword: "Nike",
  category: 25245
  })

products = response['results']['products']['product'].each do |product|
  product['offers']['offer'].each do |offer|

    options = {
      name: offer['name'],
      description: offer['description'],
      price_retail: offer['price_retail'],
      url: offer['url'],
      remote_image_url_large_url: offer['image_url_large']
    }

    product = Product.create!(options)
  end
end