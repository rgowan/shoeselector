require.config({
  shim: {
    'jquery_ujs': ['jquery']
  },
  paths: {
    jquery      : 'lib/jquery',
    jquery_ui   : 'lib/jquery_ui.min',
    underscore  : 'lib/underscore',
    backbone    : 'lib/backbone',
    text        : 'lib/text',
    paginator   : 'lib/backbone.paginator',
    csrf        : 'lib/modules/csrf',
    jquery_ujs  : 'lib/jquery_ujs'
  }
});

require([
  'app',
  'jquery_ujs'
], function(App){
  if ($('main').length > 0) {
    App.initialize();
  }
});