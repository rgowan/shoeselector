require.config({
  shim: {
    'jquery-ujs': ['jquery']
  },
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    paginator: 'lib/backbone.paginator',
    csrf: 'lib/modules/csrf'
  }
});

require([
  'app',
], function(App){
  if ($('main').length > 0) {
    App.initialize();
  }
});