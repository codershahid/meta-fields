import $ from 'jquery';
import 'slick-carousel';
import "slick-carousel/slick/slick.scss";
export default () => {
  (function(cpSlider, $) {
    'use strict';
    const $dom = {};
    const cacheDom = () => {
      $dom.cpSlider = $('.forSlick');
    };
    const prevArrow = `<svg width="7px" height="15px" viewBox="0 0 7 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Path 2</title> <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Home-1440---v3---Ivy-Mode-Light" transform="translate(-868.000000, -5153.000000)" stroke="#2E251C"> <g id="collections" transform="translate(0.000000, 4461.000000)"> <g id="2" transform="translate(405.000000, 318.000000)"> <g id="scroller" transform="translate(447.000000, 349.000000)"> <polyline id="Path-2" points="22 25 17 32.8799905 22 40"></polyline> </g> </g> </g> </g> </g></svg>`;
    const nextArrow = `<svg width="7px" height="15px" viewBox="0 0 7 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Path 2</title> <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Home-1440---v3---Ivy-Mode-Light" transform="translate(-894.000000, -5153.000000)" stroke="#2E251C"> <g id="collections" transform="translate(0.000000, 4461.000000)"> <g id="2" transform="translate(405.000000, 318.000000)"> <g id="scroller" transform="translate(447.000000, 349.000000)"> <polyline id="Path-2" transform="translate(45.500000, 32.500000) rotate(-180.000000) translate(-45.500000, -32.500000) " points="48 25 43 32.8799905 48 40"></polyline> </g> </g> </g> </g> </g></svg>`

    const sliderInit = () => {
      const cpSliderOptions = {
        arrows: true,
        prevArrow: `<button type="button" class="slick-prev"> ${prevArrow}  </button>`,
        nextArrow: `<button type="button" class="slick-next"> ${nextArrow} </button>`,
        appendArrows: $('.collection__arrows'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        // autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          }, {
      
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }    
      $dom.cpSlider.slick(cpSliderOptions);
    };
    const init = () => {
      cacheDom();
      sliderInit();
    };
    cpSlider.init = init;
  }
  (window.cpSlider = window.cpSlider || {}, $));
}