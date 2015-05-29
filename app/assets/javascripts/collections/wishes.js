define([
  'underscore',
  'backbone',
  'models/wish'
  ], function(_, Backbone, Wish){

    return Backbone.Collection.extend({
      model: Wish,
      url: "wishes.json"
    });
    
  });