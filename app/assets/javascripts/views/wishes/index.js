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
        "click .remove"  : "removeWish"
      },

      removeWish: function(event){
          // event.preventDefault()
          // var wish = $(event.currentTarget);
          // var id = $(event.currentTarget).data("id");
          // this.wish = new Wish({id: id});
          // this.wish.destroy({
          //   Backbone.history.navigate('wishes', true);
          // })
          // $.ajax({
          //   type: "PUT", //Delete?
          //   dataType: "JSON",
          //   url: "/products/"+self.id+"/dislike"
          // }).done(function(data, response){
          //   wish.destroy();
          // });
        }
    });

    return WishesIndexView
  });