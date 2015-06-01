define([
  'underscore',
  'backbone',
  ], function(_, Backbone){

    return Backbone.Model.extend({
      urlRoot: "/wishes",
      defaults: {
        id: null,
        products: []
      }
    });
  });