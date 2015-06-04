 define([
  'jquery',
  'underscore',
  'backbone',
  'collections/products',
  'text!templates/products/index.html',
  'csrf',
  "lib/jquery.transform2d",
  "lib/jquery.jTinder"
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
      render: function(data, prevEl){
        var template = _.template(ProductsTemplate);
        this.$el.html(template({products: data}))
        this.tinder();
      },

      events: {
        "click #next-page"  : "nextPage",
        "click #like"       : "likeProduct",
        "click #dislike"    : "dislikeProduct"
      },

      tinder: function() {
        var self = this;
        $("#tinderslide").jTinder({
          onLike: function(item) {
            $('#status').html('Like image ' + (item.index()+1));
            self.actionProduct(item, "like");
          },
          onDislike: function(item) {
            $('#status').html('Dislike image ' + (item.index()+1));
            self.actionProduct(item, "dislike");
          },
          animationRevertSpeed: 200,
          animationSpeed: 400,
          threshold: 1,
          likeSelector: '.like',
          dislikeSelector: '.dislike'
        });

        $('.actions .like, .actions .dislike').on('click', function(e){
          e.preventDefault();
          $("#tinderslide").jTinder($(this).attr('class'));
        });
      },

      nextPage: function(){
        var self          = this;
        var collection    = new ProductsCollection();
        collection.getPage(this.currentPage).done(function(data){
          self.currentPage++
          self.id = data[0].id;
          self.render(data)
        });
      },

      actionProduct: function(item, verb){
        var self = this;
        $.ajax({
          type: "PUT",
          dataType: "JSON",
          url: "/products/"+item.data("id")+"/"+verb
        }).done(function(data, response){
          if ($("#tinderslide ul li").length < 3) {
            self.nextPage()
          } else {
            $("#tinderslide ul li:last-child").remove();
          }
        });
      }
    });

    return ProductsIndexView;
  });