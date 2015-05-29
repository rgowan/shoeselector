define([
  'underscore',
  'backbone',
  'models/product'
], function(_, Backbone, Product){

  return Backbone.Collection.extend({
    model: Product,
    url: "/products.json"
  });

});