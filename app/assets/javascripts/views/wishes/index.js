define([
  'jquery',
  'underscore',
  'backbone',
  'models/wish',
  'collections/wishes',
  'text!templates/wishes/index.html'
  ], function($, _, Backbone, Wish, WishesCollection, WishesTemplate){

    var WishesIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        var self        = this;
        var collection  = new WishesCollection();
        var data        = collection.fetch({
          success: function(data){
            self.render(data)
          }
        });
      },
      render: function(data){
        var template = _.template(WishesTemplate);
        this.$el.html(template({wishes: data.models }));
      },

      events: {
        "click .remove-wish"  : "removeWish"
        // "click .buy-now" : "showLoader"
      },

      // showLoader: function(){ $("#overlay").show() },

      removeWish: function(event){
        var wish    = $(event.currentTarget);
        var wish_id = wish.data("id")
        event.preventDefault();
        var self = this;
        $.ajax({
          type: "PUT",
          url: "products/"+wish_id+"/dislike",
          data: { _method: 'delete' }
        }).done(function(data){
          wish.parent().parent().fadeOut();
          console.log(data)
        })
      }
    });

    return WishesIndexView
  });