import SmoothScroll from 'smoothscroll-for-websites';
import affix from 'bootstrap-sass/assets/javascripts/bootstrap/affix';
// import isotope from 'isotope-layout';
// import EasyPieChart from 'easy-pie-chart/dist/easypiechart.js';
import './thirdParty/easypiechart.js';
import desertSelfImage from '../../public/img/pers/desert-self2.jpg?sizes[]=300,sizes[]=600,sizes[]=1024&format=webp';

('use strict');
(function () {
  SmoothScroll({ stepSize: 20 });

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

  // npm version of pie chart
  /* var index = 0;
  var chartContainers = document.querySelectorAll('.chart');
  const chartOptions = {
    easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    },
  };

  $(document).on('scroll', function () {
    var top = $('#skills').height() - $(window).scrollTop();
    if (top < -300) {
      if (index == 0) {
        chartContainers.forEach((chartEl) => {
          new EasyPieChart(chartEl, chartOptions);
        });
      }
      index++;
    }
  }); */

  // Portfolio isotope filter
  /* $(window).on('load', function () {
    var $container = document.querySelector('.portfolio-items');
    new isotope($container, {
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });

    $('.cat a').on('click', function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      new isotope($container, {
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });
  }); */

  /* 
  const headerEle = document.querySelector("#header");
  const introEle = document.querySelector(".intro");

  headerEle.addEventListener("mousemove", (e) => {
    // introEle.stopPropagation();

    introEle.style.backgroundPositionX = -e.offsetX * 0.02 + "px";
    introEle.style.backgroundPositionY = -e.offsetY * 0.02 + "px";
  }); 
  */

  createProfileImage();
})();

function createProfileImage() {
  const img = new Image();

  img.src = desertSelfImage.src;
  img.srcset = desertSelfImage.srcSet;
  img.setAttribute('sizes', '200px');
  img.classList.add('img-responsive');

  document.querySelector('.profile-image').appendChild(img);
}
