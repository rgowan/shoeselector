define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/homepage/index.html',
  'lib/slick'
  ], function($, _, Backbone, HomepageTemplate, Slick){

    var HomepageIndexView = Backbone.View.extend({
      el: 'main',
      initialize: function(){
        var self = this;
      },

      events: {
        "click .drop" : "scrollToSection"
      },

      scrollToSection: function(){
        if ($(".drop").hasClass("rotated")) {

          $('main, body').animate({
            scrollTop: 0,
          }, 1000, function() {
            $(".drop").removeClass("rotated");
          });
        } else {
          $('main, body').animate({
            scrollTop: $(".drop").offset().top,
          }, 1000, function() {
            $(".drop").addClass("rotated");
          });
        }
        
      },

      render: function(){
        var template = _.template(HomepageTemplate);
        this.$el.html(template)
        $('.swipe').slick({
          swipe: true
        });
        $('.logo-slide').slick({
          infinite: true,
          speed: 300,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 2500
        });
      }
    });

    return HomepageIndexView
  });