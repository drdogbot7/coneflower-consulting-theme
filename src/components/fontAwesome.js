import { library, dom } from '@fortawesome/fontawesome-svg-core';

import {
	faFacebook,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import {
	faBars,
	faTimesCircle,
	faAngleDown,
} from '@fortawesome/pro-light-svg-icons';

const initFontAwesome = () => {
	library.add(faFacebook, faLinkedin, faInstagram);
	library.add(faBars, faTimesCircle, faAngleDown);
	dom.watch();
};

export default initFontAwesome;
