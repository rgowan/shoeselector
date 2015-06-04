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
        "click .remove"  : "removeWish",
        "click .buy-now" : "showLoader"
      },

      showLoader: function(){ $("#overlay").show() },

      removeWish: function(){
        var self = this;
        $.ajax({
          type: "DELETE",
          dataType: "JSON",
          url: "wishes/"+self.id+"/dislike"
        }).done(function(data, response){
          
        })
      }
    });

    return WishesIndexView
  });