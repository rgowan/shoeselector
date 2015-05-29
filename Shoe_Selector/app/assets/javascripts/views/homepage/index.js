define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/homepage/index.html'
  ], function($, _, Backbone, HomepageTemplate){

    var HomepageIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        var self = this;
      }, 
      render: function(){
        var template = _.template(HomepageTemplate);
        this.$el.html(template)
      }
    });

    return HomepageIndexView
  });