CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',                                # required
    aws_access_key_id: '<your AWSAccessKeyId>',     # required
    aws_secret_access_key: '<your AWSSecretKey>',   # required
    region: 'eu-west-1',                            # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = '<your bucket name>'      # required
  config.fog_public  = true                         # optional, defaults to true
end