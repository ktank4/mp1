/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files
import './index.html';

// Stylesheets
import './css/main.scss';

// Scripts
import './js/main.js';
import './js/carousel.js';
import './js/nav.js';
import './js/modal.js';

const targetDiv = document.getElementById('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        targetDiv.classList.add('shrink');
    } else {
        targetDiv.classList.remove('shrink');
    }
});
