define([
  'underscore',
  'backbone',
  'paginator',
  'models/product'
  ], function(_, Backbone, PageableCollection, Product){

    return Backbone.PageableCollection.extend({
      model: Product,
      url  : "/products.json",
      state: {
        pageSize      : 1,
        order         : 1,
        totalRecords  : 100
      },
      queryParams : {
        pageSize     : "pageSize",
        order        : "direction",
        directions : {
          "-1" : "asc",
          "1"  : "desc"
        }
      }
    });

  });