define([
  'jquery',
  'underscore',
  'backbone',
  'views/application',
  'views/products/index'
  ], function($, _, Backbone, ApplicationView, ProductsIndexView){

    var layout = function(){
      new ApplicationView().render();
    }

    var Router = Backbone.Router.extend({
      routes: {
        ''         : 'home',
        'products' : 'productsIndex',
        '*actions' : 'defaultAction'
      }
    });

    var initialize = function(){
      var router = new Router;
      layout();

      router.on('route:home', function(){

      });

      router.on('route:productsIndex', function(){

        new ProductsIndexView();
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