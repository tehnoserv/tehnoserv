(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(95677403, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });

(function($) {
"use strict"; 

/* revoing preloader */
$(window).on('load', function () {
    if ($(".corporex-preloader").length > 0){
        $(".corporex-preloader").fadeOut("slow");
    }
  });

// bootstrap carousel, making image to background image

$('#corporex-slider .slider-bg').each(function(){
	var imgSrc = $(this).attr('src');

	$(this).parents('.item').css('background-image', 'url(' + imgSrc + ')');

	$(this).remove();
});


/* SLICK SLIDER */
$('#testimonial-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        //arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/* testimonial carousel 02 */
/* SLICK SLIDER */
$('#testimonial-carousel-02').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",

});

/* MAGNIFIC POPUP */
$('.portfolio-popup').magnificPopup({
  type: 'image',
  gallery: {

      enabled: true,
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tPrev: 'Назад', // title for left button
      tNext: 'Вперёд', // title for right button
      tCounter: '%curr% из %total%'
  }

  // other options
});


/* MAGNIFIC POPUP FOR FOOTER GALLERY */
$('.gallery-img').magnificPopup({
    type: 'image',
    removalDelay: 300,
    gallery: {
        enabled: true,
    }
});



/* tweet carousel 02 */
/* SLICK SLIDER */
$('.tweet-carousel').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",

});


// menu dropdown trying
  $(document).ready(function(){
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });

/* SHORTCODES */

/* accordion */

// adding active class to bootstrap accordion
$(document).ready(function() {
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
});


/* team carousel */
/* SLICK SLIDER */
$('.team-carousel').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  //slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        //arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/* partner carousel */
/* SLICK SLIDER */
$('.partner-carousel').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  //slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        //arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/* tooltip */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

/* popover */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

$('a[data-toggle="popover"]').click(function(e) {
  e.preventDefault();
});



/* easy pie chart */
$(function() {
    $('.chart-01').easyPieChart({
        //your options goes here
        size: 180,
        lineWidth: 7,
        barColor: '#E8802E',
        trackColor: '#f1f1f1',
        scaleColor: false,
    });

    $('.chart-02').easyPieChart({
        //your options goes here
        size: 180,
        lineWidth: 2,
        barColor: '#E8802E',
        trackColor: '#f1f1f1',
        scaleColor: false,
    });

    $('.chart-03').easyPieChart({
        //your options goes here
        size: 180,
        lineWidth: 12,
        barColor: '#E8802E',
        trackColor: '#f1f1f1',
        scaleColor: false,
    });
});


/* widget content slider */
$('.widget-content-slider .slider-wrapper').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",

});

/* widget image slider */
$('.widget-image-slider .image-slider-wrapper').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
  //nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",

});

/* widget testimonial slider */
$('.widget-testimonial .testimonial-wrapper').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<div class='slick-btn prev-btn'><i class='fa fa-chevron-left'></i></div>",
  nextArrow:"<div class='slick-btn next-btn'><i class='fa fa-chevron-right'></i></div>",

});

/* MIXITUP INITIALIZATION  */

// var mixer = mixitup('.portfolio-container', {
//     selectors: {
//         target: '.portfolio-item'
//     },
//     animation: {
//         //duration: 300
//     }
// });
//var Mixr = $('.portfolio-container');
var containerEl = document.querySelector('.portfolio-container');
var mixer;

if (containerEl) {
    mixer = mixitup(containerEl);
}


/* COUNTER UP PLUGIN INITIALIZATION */

if($('.counter').length){
    $('.counter').counterUp({
      //delay: 10,
      time: 2000,
      //offset: 70,
      //beginAt: 100
  });
}


// ANIMATED PROGRESS BAR
if($('.anim-progress').length){
 $('.anim-progress').waypoint({
  handler: function(direction) {

    $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
    )

    if($('.anim-progress').hasClass('progress-01')){
      $('.anim-progress').find('span').css('opacity', '1');
    }
  },

  offset: '600px'

})
}


})(jQuery);

	$(document).ready(function () {
    var scroll_pos = 0;
    // $("#home-01").scroll(function () {
		window.onscroll = function (event) {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 15) {
            $("#navbar-2").css({'background-color':'white','margin-top':'0',});
            $("#logo").height(60);
        } else {
            $("#navbar-2").css({'background-color':'white', 'margin-top': '5vh'});
            $("#logo").height(80);
        }
    // });
    };
});
