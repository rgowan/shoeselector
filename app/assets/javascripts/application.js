require.config({
  shim: {
    'jquery_ujs': ['jquery']
  },
  paths: {
    jquery      : 'lib/jquery',
    underscore  : 'lib/underscore',
    backbone    : 'lib/backbone',
    text        : 'lib/text',
    paginator   : 'lib/backbone.paginator',
    csrf        : 'lib/modules/csrf',
    jquery_ujs  : 'lib/jquery_ujs',
    tinder      : 'lib/modules/tinder'
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