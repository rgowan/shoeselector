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
        this.currentPage = 1; // or whateva
        var self = this;
        var collection = new ProductsCollection();
        collection.getPage(1).done(function(data){
          self.render(data)
        });
      },
      render: function(data){
        var template = _.template(ProductsTemplate);
        this.$el.html(template({products: data}));
      },

      events: {
        "click #next-page": "nextPage"
      },

      nextPage: function(event){
        event.preventDefault();
        var self = this;
        var collection = new ProductsCollection();
        collection.getPage(this.currentPage).done(function(data){
          self.currentPage++
          self.render(data)
        });
      }
    });

    return ProductsIndexView;
  });