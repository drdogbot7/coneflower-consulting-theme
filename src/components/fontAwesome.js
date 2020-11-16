import { library, dom } from '@fortawesome/fontawesome-svg-core';

import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const initFontAwesome = () => {
  library.add(faFacebook, faLinkedin, faInstagram);
  library.add(faBars, faTimesCircle);
  dom.watch();
};

export default initFontAwesome;
