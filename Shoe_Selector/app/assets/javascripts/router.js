define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone, ApplicationView){

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
        console.log("Home");
      });

      router.on('route:productsIndex', function(){
        console.log("Products Index")
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