class Product < ActiveRecord::Base
  acts_as_votable
  belongs_to :wish
  default_scope { order(:cached_votes_up => :desc) } 
end
