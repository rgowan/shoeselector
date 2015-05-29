define([
  'jquery',
  'underscore',
  'backbone',
  'paginator',
  'views/application',
  'views/products/index',
  'views/wishes/index',
  'views/homepage/index'
  ], function($, _, Backbone, PageableCollection, ApplicationView, ProductsIndexView, WishesIndexView, HomepageIndexView){

    var layout = function(){
      new ApplicationView().render();
    }

    var Router = Backbone.Router.extend({
      routes: {
        ''         : 'home',
        'products' : 'productsIndex',
        'wishes'   : 'wishesIndex',
        '*actions' : 'defaultAction'
      }
    });

    var initialize = function(){
      var router = new Router;
      layout();

      router.on('route:home', function(){
        new HomepageIndexView().render();
      });

      router.on('route:productsIndex', function(){
        new ProductsIndexView();
      });

      router.on('route:wishesIndex', function(){
        new WishesIndexView();
      });

      router.on('route:defaultAction', function(actions) {
        console.log('No route:', actions);
      });

      Backbone.history.start();
    }

    return {
      initialize: initialize
    }
  });