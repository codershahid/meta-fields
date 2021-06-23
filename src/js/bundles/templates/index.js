import 'Styles/templates/index.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import cpSlider from '../components/slick-slider';
cpSlider();
window.cpSlider.init();

document.getElementById('footerDate').textContent = new Date().getFullYear();

  const accHead = document.querySelectorAll('.accordion__head');

  accHead.forEach(el => {
      el.addEventListener('click', () => {
        el.parentNode.classList.toggle('active');
        const collapseDiv = el.nextElementSibling;
        if(collapseDiv.style.height) collapseDiv.style.height = null;
        else collapseDiv.style.height = collapseDiv.scrollHeight + 'px'
      })
  });

