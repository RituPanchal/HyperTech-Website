import $ from "jquery";
// import jQuery from "jquery";

function isCounterElementVisible($element) {
    var topView = $(window).scrollTop();
    var botView = topView + $(window).height();
    var topElement = $element.offset().top;
    var botElement = topElement + $element.height();
    return ((botElement <= botView) && (topElement >= topView));
  }
  
  $(window).scroll(function() {
    $(".timer").each(function() {
      var isOnView = isCounterElementVisible($(this));
      if (isOnView && !$(this).hasClass('visibled')) {
        $(this).addClass('visibled');
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      }
    });
  });
  
  


// $(window).scroll(function () {

//     if ($(window).scrollTop() + $(window).height() > $('.overlay').offset().top) {
//         console.log("visible");
//         jQuery(function($) {
//             $('.timer1').countTo({
//                 from: 50,
//                 to: 2500,
//                 speed: 7000,
//                 refreshInterval: 50,
//                 onComplete: function(value) {
//                     console.debug(this);
//                 },
//                 onUpdate: function (value) {
//                     $(this).append("m2");
//                 }
        
//             });
//             $('.timer2').countTo({
//                 from: 50,
//                 to: 5000,
//                 speed: 7000,
//                 refreshInterval: 50,
//                 onComplete: function(value) {
//                     console.debug(this);
//                 },
//                 onUpdate: function (value) {
//                     $(this).append("m2");
//                 }
//             });
//             //   $('.timer2').html("m2");
        
//             $('.timer3').countTo({
//               from: 50,
//               to: 10000,
//               speed: 7000,
//               refreshInterval: 50,
//               onComplete: function(value) {
//                   console.debug(this);
//                 },
//                 onUpdate: function (value) {
//                     $(this).append("m2");
//                 }
//             });
//             $('.timer4').countTo({
//               from: 50,
//               to: 10000,
//               speed: 7000,
//               refreshInterval: 50,
//               onComplete: function(value) {
//                 console.debug(this);
//             }, 
//                 onUpdate: function (value) {
//                     $(this).append("m2");
//                 }
//             });
//             return false;
//         });
//     } else {
//         console.log("invisible");
//     }
// });

// (function ($) {
//     $.fn.countTo = function (options) {
        
//         // merge the default plugin settings with the custom options
//         options = $.extend({}, $.fn.countTo.defaults, options || {});
  
//         // how many times to update the value, and how much to increment the value on each update
//         var loops = Math.ceil(options.speed / options.refreshInterval),
//             increment = (options.to - options.from) / loops;
  
//         return $(this).each(function() {
//             var _this = this,
//                 loopCount = 0,
//                 value = options.from,
//                 interval = setInterval(updateTimer, options.refreshInterval);
  
//             function updateTimer() {
//                 value += increment;
//                 loopCount++;
//                 $(_this).html(value.toFixed(options.decimals));
                
//                 if (typeof(options.onUpdate) == 'function') {
//                     options.onUpdate.call(_this, value);
//                 }
                
//                 if (loopCount >= loops) {
//                     clearInterval(interval);
//                     value = options.to;
                    
//                     if (typeof(options.onComplete) == 'function') {
//                         options.onComplete.call(_this, value);
//                     }
//                 }
//             }
//         });
//     };
  
//     $.fn.countTo.defaults = {
//         from: 0,  // the number the element should start at
//         to: 100,  // the number the element should end at
//         speed: 5000,  // how long it should take to count between the target numbers
//         refreshInterval: 100,  // how often the element should be updated
//         decimals: 0,  // the number of decimal places to show
//         onUpdate: null,  // callback method for every time the element is updated,
//         // onComplete: null,  // callback method for when the element finishes updating
//     };
//   })(jQuery);
  
// //   jQuery(function($) {
// //     $('.timer1').countTo({
// //         from: 50,
// //         to: 2500,
// //         speed: 5000,
// //         refreshInterval: 50,
// //         onComplete: function(value) {
// //             console.debug(this);
// //         },
// //         onUpdate: function (value) {
// //             $(this).append("m2");
// //         }

// //     });
// //     $('.timer2').countTo({
// //         from: 50,
// //         to: 5000,
// //         speed: 5000,
// //         refreshInterval: 50,
// //         onComplete: function(value) {
// //             console.debug(this);
// //         },
// //         onUpdate: function (value) {
// //             $(this).append("m2");
// //         }
// //     });
// //     //   $('.timer2').html("m2");

// //     $('.timer3').countTo({
// //       from: 50,
// //       to: 10000,
// //       speed: 5000,
// //       refreshInterval: 50,
// //       onComplete: function(value) {
// //           console.debug(this);
// //         },
// //         onUpdate: function (value) {
// //             $(this).append("m2");
// //         }
// //     });
// //     $('.timer4').countTo({
// //       from: 50,
// //       to: 10000,
// //       speed: 5000,
// //       refreshInterval: 50,
// //       onComplete: function(value) {
// //         console.debug(this);
// //     }, 
// //         onUpdate: function (value) {
// //             $(this).append("m2");
// //         }
// //   });
// //   });

// //   $(allInView);
// // $(window).scroll(allInView);


// // function isScrolledIntoView(elem) {
// //     var docViewTop = $(window).scrollTop();
// //     var docViewBottom = docViewTop + $(window).height();

// //     var elemTop = $(elem).offset().top;
// //     var elemBottom = elemTop + $(elem).height();

// //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// // }

// // function allInView() {

// //     if (isScrolledIntoView($(".home-01-head-container"))) console.log("visible");
// //     else console.log("not visible");

// //     // if (isScrolledIntoView($(".page2"))) $(".page2").css("backgroundColor", "green");
// //     // else $(".page2").css("backgroundColor", "#333");

// //     // if (isScrolledIntoView($(".page3"))) $(".page3").css("backgroundColor", "yellow");
// //     // else $(".page3").css("backgroundColor", "#222");

// //     // if (isScrolledIntoView($(".page4"))) $(".page4").css("backgroundColor", "blue");
// //     // else $(".page4").css("backgroundColor", "#111");

// // }