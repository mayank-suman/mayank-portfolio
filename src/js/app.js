import SmoothScroll from 'smoothscroll-for-websites';
import affix from 'bootstrap-sass/assets/javascripts/bootstrap/affix';
import collapse from 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
import transition from 'bootstrap-sass/assets/javascripts/bootstrap/transition';
// import isotope from 'isotope-layout';
// import EasyPieChart from 'easy-pie-chart/dist/easypiechart.js';
import './thirdParty/easypiechart.js';
import desertSelfImage from '../../public/img/pers/desert-self2.jpg?sizes[]=300,sizes[]=600,sizes[]=1024&format=webp';

('use strict');

// skills chart
//var windowBottom = $(window).height();
// TODO: add progressive image loading
function initPieChartLoadOnscroll() {
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
}

function initLinkOnClickScroll() {
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
}

// affix the navbar after scroll below header
function initNavbarAffix() {
  $('#nav').affix({
    offset: {
      top: $('header').height(),
    },
  });
}

function createProfileImage() {
  const img = new Image();

  img.src = desertSelfImage.src;
  img.srcset = desertSelfImage.srcSet;
  img.setAttribute('sizes', '200px');
  img.setAttribute('width', '200');
  img.setAttribute('height', '200');
  img.classList.add('img-responsive');

  document.querySelector('.profile-image').appendChild(img);
}

function showHtml() {
  const body = document.querySelector('body');
  body.classList.remove('htmlHidden');
}

function initGA() {
  const insertScriptAsync = (url, callback) => {
    function loadError(oError) {
      throw new URIError(
        'The script ' + oError.target.src + " didn't load correctly."
      );
    }

    var newScript = document.createElement('script');
    newScript.onerror = loadError;

    if (callback) {
      newScript.onload = callback;
    }

    document.currentScript.parentNode.insertBefore(
      newScript,
      document.currentScript
    );

    newScript.src = url;
  };

  const addGATags = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-D0GP8LKDT2');
  };

  insertScriptAsync(
    'https://www.googletagmanager.com/gtag/js?id=G-D0GP8LKDT2',
    () => {
      addGATags();
    }
  );
}

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

function initApp() {
  showHtml();
  // BUG:fix smooth scroll plugin not working
  SmoothScroll({ stepSize: 20 });

  initLinkOnClickScroll();

  initNavbarAffix();

  initPieChartLoadOnscroll();

  createProfileImage();

  initGA();
}

initApp();
export default initApp;
