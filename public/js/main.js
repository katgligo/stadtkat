(function() {
  'use strict';

  const images = document.querySelectorAll('img[src$="#expandable"]');
  const lightbox = document.getElementById('lightbox');
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', e => {
      const src = e.target.src;
      const bigImg = document.createElement('img');
      bigImg.src = src;
      lightbox.appendChild(bigImg);
      lightbox.classList.add('open');
    });
  }

  lightbox.addEventListener('click', e => {
    lightbox.innerHTML = '';
    lightbox.classList.remove('open');
  });
})();
