define([
  'jquery',
  'jquery_ujs',
  'underscore',
  'backbone',
  'router',
  'lib/modules/bourbon'
], function($, jQueryUjs, _, Backbone, Router, Bourbon){

  var initialize = function(){
    Bourbon();
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});