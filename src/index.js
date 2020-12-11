// eslint-disable-next-line no-unused-vars
import alpine from 'alpinejs';
import WebFont from 'webfontloader';
import { addBackToTop } from 'vanilla-back-to-top';
import initFontAwesome from './components/fontAwesome';

import './styles/main.css';

WebFont.load({
	google: {
		families: ['Raleway:200,400'],
	},
});

const initPage = () => {
	initFontAwesome();
	addBackToTop({ backgroundColor: '#4F3590' });
};

/** Load Events */
document.addEventListener('DOMContentLoaded', initPage());
