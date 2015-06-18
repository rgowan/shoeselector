CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',                                # required
    aws_access_key_id: ENV['SHOE_SELECTOR_AWS_SECRET_KEY'],     # required
    aws_secret_access_key: ENV['SHOE_SELECTOR_AWS_ACCESS_KEY'], # required
    region: 'eu-west-1',                            # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = ENV['SHOE_SELECTOR_AWS_BUCKET_NAME'] # required
  config.fog_public  = true                         # optional, defaults to true
end