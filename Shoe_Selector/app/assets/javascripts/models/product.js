define([
  'underscore',
  'backbone',
  ], function(_, Backbone){

    return Backbone.Model.extend({
      urlRoot: "/products",
      defaults: {
        id              : null,
        name            : '',
        image_url_large : '',
        description     : '',
        url             : '',
        price_retail    : '',
        created_at      : '',
        updated_at      : ''
      }
    });
  });