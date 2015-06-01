// define([
//   "backbone"
// ], function(Backbone){
//   Backbone.ajax = function() {
//     // Invoke $.ajaxSetup in the context of Backbone.$
//     Backbone.$.ajaxSetup.call(Backbone.$, {
//       beforeSend: function(jqXHR){
//         var token = $('meta[name="csrf-token"]').attr('content');
//         jqXHR.setRequestHeader("'X-CSRF-Token", token);
//       }
//     });
    
//     return Backbone.$.ajax.apply(Backbone.$, arguments);
//   };    
// });
