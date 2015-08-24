desc "Saves popshops data to database2"
task :crawl_popshops do
  require 'httparty'

  log = ActiveSupport::Logger.new('log/crawl_popshops.log')
  start_time   = Time.now
  log.info "Task started at #{start_time}"

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

      # product = Product.find_by_popshops_id()
      # if !product 
      #   options = {
      #     name: offer['name'],
      #     description: offer['description'],
      #     price_retail: offer['price_retail'],
      #     url: offer['url'],
      #     remote_image_url_large_url: offer['image_url_large']
      #   }

      #   product = Product.create!(options)
      # end
    end
  end

  end_time = Time.now
  duration = (start_time - end_time) / 1.minute
  log.info "Task finished at #{end_time} and last #{duration} minutes."
  log.close
end