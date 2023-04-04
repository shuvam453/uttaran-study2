jQuery(document).ready(function($){
// document start


 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end


 
/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end





// to make sticky nav bar
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 60) { 
        $(".main-head").addClass("fixed"); 
    } 
    else {
      $(".main-head").removeClass("fixed"); 
    }
}) 


// smooth scroll to any section
// if($('a.scroll').length){
//     $("a.scroll").on('click', function(event) {
//       if (this.hash !== "") {
//         event.preventDefault();
//         var target = this.hash, $target = $(target);
//         $('html, body').animate({
//           scrollTop: $target.offset().top - 60
//         }, 800, function(){
//           window.location.href.substr(0, window.location.href.indexOf('#'));
//         });
//       } 
//     });
  
//   }


// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}




// one page scroll menu link
// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     $('.navbar-nav > li > a').each(function () {
//         $(this).parent('li').removeClass('current-menu-item');
//     });
//     $(this).parent('li').addClass('current-menu-item');
//     var target = this.hash, $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 500, 'swing', function () {
//         window.location.href.substr(0, window.location.href.indexOf('#'));
//         $(document).on("scroll", onScroll);
//     });
// });
//  $(document).on("scroll", onScroll);
// function onScroll(event){
//     var scrollPos = $(document).scrollTop() + 100;
//     $('.navbar-nav > li > a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar-nav > li').removeClass("current-menu-item");
//             currLink.parent('li').addClass("current-menu-item");
//         }
//         else{
//             currLink.parent('li').removeClass("current-menu-item");
//         }
//     });
// }





// slick slider

// $('.brandout-sider').slick({
//   dots: false,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   centerMode: true,
//   adaptiveHeight: true,
//   centerPadding: '0px',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });



$('.course_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.prev_course',
  nextArrow: '.next_course',
  autoplay: true,
  autoplaySpeed: 3000,
});


$('.course_slider2').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev_course2',
    nextArrow: '.next_course2',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.course_slider3').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev_course3',
    nextArrow: '.next_course3',
    autoplay: true,
    autoplaySpeed: 3000,
  });


  $('.centre_slider').slick({
    dots: true,
    arrows: true,
    prevArrow: '.centre_arrw_prev',
    nextArrow: '.centre_arrw_next',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  //   autoplay: true,
    autoplaySpeed: 3000,
  });


  var counted = 0;
  $(window).scroll(function() {
  
    var oTop = $('.cuntr_rw').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      counted = 1;
    }
  
  });




  $('.intra_slider_sec').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '12%',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.review_slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '.review_prev',
    nextArrow: '.review_next',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '20vw',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: '15vw'
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '10vw'
        }
      }
    ]
  });



  
  // jQuery(window).load(function(){
  //   custom_popUp();
  // });

  // custom_popUp();
  // function custom_popUp(){
  //   setTimeout(function(){
  //     $('.main_popUp').addClass('popUp-active');
  //     $('body').addClass('over_hide');
  //   }, 2000);
  // }
  
  // $('.load_popUp a').click(function(){
  //   $('.main_popUp').removeClass('popUp-active');
  //   $('body').removeClass('over_hide');
  // });





// document end

})

var swiper = new Swiper(".banner_main_wraper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next_arrow",
      prevEl: ".prev_arrow",
    },
  });

  AOS.init();

