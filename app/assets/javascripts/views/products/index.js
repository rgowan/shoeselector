 define([
  'jquery',
  'underscore',
  'backbone',
  'collections/products',
  'text!templates/products/index.html',
  'csrf'
  ], function($, _, Backbone, ProductsCollection, ProductsTemplate, csrf){

    var ProductsIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        this.currentPage  = 1;
        var self          = this;
        var collection    = new ProductsCollection();
        collection.getPage(1).done(function(data){
          self.currentPage++;
          self.id = data[0].id;
          self.render(data);
        });
      },
      render: function(data){
        var template = _.template(ProductsTemplate);
        this.$el.html(template({products: data}));
      },

      events: {
        "click #next-page"  : "nextPage",
        "click #like"       : "likeProduct",
        "click #dislike"    : "dislikeProduct"
      },

      nextPage: function(event){
        event.preventDefault();
        var self          = this;
        var collection    = new ProductsCollection();
        collection.getPage(this.currentPage).done(function(data){
          self.currentPage++
          self.id = data[0].id;
          self.render(data)
        });
      },

      likeProduct: function(event){
        event.preventDefault()
        var self = this;
        $.ajax({
          type: "PUT",
          dataType: "JSON",
          url: "/products/"+self.id+"/like"
        }).done(function(data, response){
          self.nextPage(event)
        });
      },

      dislikeProduct: function(event){
        event.preventDefault()
        var self = this;
        $.ajax({  
          type: "PUT",
          dataType: "JSON",
          url: "/products/"+self.id+"/dislike"
        }).done(function(data, response){
          self.nextPage(event)
        });
      }
    });

    return ProductsIndexView;
  });