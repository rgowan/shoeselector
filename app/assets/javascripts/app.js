define([
  'jquery',
  'jquery_ujs',
  'underscore',
  'backbone',
  'router'
], function($, jQueryUjs, _, Backbone, Router){

  var initialize = function(){
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});