//import Swiper from 'swiper';
//import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

import myGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


/*
const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});
*/

myGallery(document.querySelector(".gallery__list"), {
  plugins: [lgZoom, lgThumbnail],
  selector: '.picture__link',
  mousewheel: true,
  getCaptionFromTitleOrAlt: false,



});
myGallery(document.querySelector(".gallery__list--better"), {
  plugins: [lgZoom, lgThumbnail],
  selector: '.picture__link', thumbnail: true,
  mousewheel: true,
});



/*
import '../styles/normalize.css';
import '../styles/fonts.css';
import '../styles/icons.css';
import '../styles/hamburger.css';*/
import '../styles/style.css';


import Clarity from '@microsoft/clarity';
const projectId = "rp5foxh9fv"
Clarity.init(projectId);
