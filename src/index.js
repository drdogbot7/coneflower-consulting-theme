import jQuery from 'jquery';
import WebFont from 'webfontloader';
import { addBackToTop } from 'vanilla-back-to-top';
import initFontAwesome from './components/fontAwesome';
import alpine from 'alpinejs';

import './styles/main.css';

WebFont.load({
  google: {
    families: ['Raleway:100'],
  },
});

const initPage = () => {
  initFontAwesome();
  addBackToTop({ backgroundColor: '#008FD5' });
};

/** Load Events */
document.addEventListener('DOMContentLoaded', initPage());
