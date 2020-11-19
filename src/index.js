// eslint-disable-next-line no-unused-vars
import alpine from 'alpinejs';
import WebFont from 'webfontloader';
import { addBackToTop } from 'vanilla-back-to-top';
import initFontAwesome from './components/fontAwesome';

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
