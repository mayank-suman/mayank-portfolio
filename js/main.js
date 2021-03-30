'use strict';
(function () {
  $('a.page-scroll').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top - 40,
          },
          900
        );
        return false;
      }
    }
  });

  // affix the navbar after scroll below header
  $('#nav').affix({
    offset: {
      top: $('header').height(),
    },
  });

  // skills chart
  //var windowBottom = $(window).height();
  var index = 0;
  $(document).on('scroll', function () {
    var top = $('#skills').height() - $(window).scrollTop();
    // console.log(top)
    if (top < -300) {
      if (index == 0) {
        $('.chart').easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
        });
      }
      index++;
    }
  });
  //console.log(nagativeValue)

  // Portfolio isotope filter
  $(window).on('load', function () {
    var $container = $('.portfolio-items');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });
    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });
  });

  // CounterUp
  if ($('span.count').length > 0) {
    $('span.count').counterUp({
      delay: 10, // the delay time in ms
      time: 1500, // the speed time in ms
    });
  }

  // Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
  });

  /* 
  const headerEle = document.querySelector("#header");
  const introEle = document.querySelector(".intro");

  headerEle.addEventListener("mousemove", (e) => {
    // introEle.stopPropagation();

    introEle.style.backgroundPositionX = -e.offsetX * 0.02 + "px";
    introEle.style.backgroundPositionY = -e.offsetY * 0.02 + "px";
  }); 
  */
})();
