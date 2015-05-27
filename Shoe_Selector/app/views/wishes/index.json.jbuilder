json.array!(@wishes) do |wish|
  json.extract! wish, :id
  json.url wish_url(wish, format: :json)
end
