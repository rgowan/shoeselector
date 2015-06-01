define([
  'jquery',
  'underscore',
  'backbone',
  'collections/wishes',
  'text!templates/wishes/index.html'
  ], function($, _, Backbone, WishesCollection, WishesTemplate){

    var WishesIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        var self = this;
        var collection = new WishesCollection();
        var data = collection.fetch({
          success: function(data){
            self.render(data)
          }
        });
      },
      render: function(data){
        var template = _.template(WishesTemplate);
        this.$el.html(template({wishes: data.models }));
      }
      
    });

    return WishesIndexView
  });