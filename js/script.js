$(".banner-slider").slick({
    fade:true,
    autoplay:true,
    prevArrow:'<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-circle-right next"></i>',
})




$('.venobox').venobox({
    framewidth : '800px',                            
    frameheight : '600px',                           
}); 


$(".services-slider").slick({
    vertical : true ,
    slidesToShow:3,
    centerMode: true,
    centerPadding:"0",
    prevArrow:'<i class="fas fa-chevron-up prev"></i>',
    nextArrow:'<i class="fas fa-chevron-down next"></i>',

     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        arrows:false,
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical : false,
       arrows:false
    
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".test-slider").slick({
    vertical : true,
    slidesToShow :3,
    centerMode :true,
    centerPadding:"0",
    prevArrow:'<i class="fas fa-chevron-up prev"></i>',
    nextArrow:'<i class="fas fa-chevron-down next"></i>',
    asNavFor: ".details-slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical : false,
          arrows:false,
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical : false,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

})


$(".details-slider").slick({
    arrows:false,
    asNavFor:" .test-slider",
    vertical : true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});



$('.counter').counterUp({
    delay: 10,
    time: 1000
});


$('.partner_line').slick({
    slidesToShow:5,
    arrows:false,
    centerMode :true,
    centerPadding:"0",
    autoplay:true,
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

});


$('.venobox-team').venobox({
    framewidth : '400px',                            
    frameheight : '400px',                           
}); 