$(window).on('scroll', function () {
  if ($(window).scrollTop() > 20) {
    $('header').addClass('sticky')
  } else {
    $('header').removeClass('sticky')
  }
})

// $(".home-carousel").slick({
//   arrows: false,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   swipeToSlide: true,
//   centerMode: true,
//   centerPadding: '100px',
//   responsive: [
//     {
//       breakpoint: 1290,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         centerPadding: '100px'
//       }
//     },
//     {
//       breakpoint: 1025,
//       settings: {
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         centerPadding: '0'
//       }
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         centerPadding: '0'
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerPadding: '0',
//       }
//     }
//   ]
// });

$('.home-carousel')
  .on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active').eq(0).addClass('slick-active-first')
  })
  .trigger('afterChange')

// $(window).resize(function() {
// var windowsize = $(window).width();
// console.log(windowsize);
// if ((windowsize > 768) && (windowsize < 992)) {
//   $('.home-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     $('.slick-active').eq(1).addClass('slick-active-first');

//   }).trigger('afterChange');
// }
// var windowsize = $(window).width();
// if(windowsize > 991) {
//   console.log('tablet width');
// }
// });

$('.blog-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
  ],
})

$('.mission-carousel').slick({
  arrows: false,
  infinite: true,
  centerMode: true,
  swipeToSlide: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
})

$('.customer-carousel').slick({
  arrows: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '160px',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '100px',
      },
    },
  ],
})

$('.content').each(function (i) {
  var bottom_of_object = $(this).offset().top + $(this).outerHeight()
  var bottom_of_window = $(window).height()

  if (bottom_of_object > bottom_of_window) {
    $(this).addClass('hidden')
  }
})

$(window).scroll(function () {
  $('.hidden').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight()
    var bottom_of_window = $(window).scrollTop() + $(window).height()

    if (bottom_of_window > bottom_of_object) {
      $(this).animate({ opacity: '1' }, 700)
    }
  })
})

$('.filter-toggle').on('click', function (e) {
  $('.filter_div').toggleClass('toggle-active')
  $('body').toggleClass('filter-active')
  e.stopPropagation()
})

$('.navbar-toggler').on('click', function (e) {
  $('body').toggleClass('menu-active')
  e.stopPropagation()
})

$(document).on('click', function (e) {
  $('body.filter-active').on('click', function (e) {
    $('body').removeClass('filter-active')
    $('.filter_div').removeClass('toggle-active')
  })
  $('body.menu-active').on('click', function (e) {
    $('body').removeClass('menu-active')
    $('.navbar-collapse').removeClass('show')
  })
})

$('.accordion-button').on('click', function (e) {
  e.stopPropagation()
})

$('.navbar-collapse ul li a.dropdown-toggle').on('click', function (e) {
  e.stopPropagation()
})

$('.accordion-collapse').on('click', function (e) {
  e.stopPropagation()
})

jQuery(
  '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="assets/images/icon-up.svg"></div><div class="quantity-button quantity-down"><img src="assets/images/icon-down.svg"></div></div>',
).insertAfter('.quantity input')
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max')

  btnUp.click(function () {
    var oldValue = parseFloat(input.val())
    if (oldValue >= max) {
      var newVal = oldValue
    } else {
      var newVal = oldValue + 1
    }
    spinner.find('input').val(newVal)
    spinner.find('input').trigger('change')
  })

  btnDown.click(function () {
    var oldValue = parseFloat(input.val())
    if (oldValue <= min) {
      var newVal = oldValue
    } else {
      var newVal = oldValue - 1
    }
    spinner.find('input').val(newVal)
    spinner.find('input').trigger('change')
  })
})
