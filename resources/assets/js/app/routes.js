/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import headerGuest from './components/headers/headerGuest/headerGuest.vue';
import footerGuest from './components/footers/footerGuest/footerGuest.vue';


const BasicLayout = (resolve) => {
  require.ensure(['./layouts/basic/basic.vue'], () => {
  // eslint-disable-next-line
  resolve(require('./layouts/basic/basic.vue'));
  }, 'basic-layout');
};


const Home = (resolve) => {
  require.ensure(['./pages/Home/Home.vue'], () => {
    // eslint-disable-next-line
    resolve(require('./pages/Home/Home.vue'));
  }, 'home');
};

// eslint-disable-next-line
export default [
  {
    path: '',
    components: {
      default: BasicLayout,
      'header' : headerGuest,
      'footer' : footerGuest
    },
    children: [
      // Home
      {
        path: '',
        name: 'home',
        components: {
          default: Home,
        },
      },
    ]
  }

];
