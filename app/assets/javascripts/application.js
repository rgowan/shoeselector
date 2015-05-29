require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    paginator: 'lib/backbone.paginator'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});