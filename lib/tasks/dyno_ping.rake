desc "Pings SHOESELECTOR_URL to keep a dyno alive"
task :dyno_ping do
  require "net/http"

  if ENV['SHOESELECTOR_URL']
    log = ActiveSupport::Logger.new('log/dyno_ping.log')
    start_time   = Time.now
    log.info "Task started at #{start_time}"

    uri = URI(ENV['SHOESELECTOR_URL'])
    Net::HTTP.get_response(uri)

    end_time = Time.now
    duration = (start_time - end_time) / 1.minute
    log.info "Task finished at #{end_time} and last #{duration} minutes."
    log.close
  end
end