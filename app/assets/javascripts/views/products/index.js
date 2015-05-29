define([
  'jquery',
  'underscore',
  'backbone',
  'collections/products',
  'text!templates/products/index.html'
  ], function($, _, Backbone, ProductsCollection, ProductsTemplate){

    var ProductsIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        var self = this;
        var collection = new ProductsCollection();
        collection.getPage(1).done(function(data){
          self.render(data)
        })
      },
      render: function(data){
        var template = _.template(ProductsTemplate);
        this.$el.html(template({products: data}));
      }
    });

    return ProductsIndexView;
  });