import { registerApplication, start } from 'single-spa';
import * as isActive from './activity-functions';

registerApplication({
  name: '@ft/backoffice-login',
  app: () =>
    import(
      /* webpackIgnore: true */
      'https://thedoctor46super.github.io/mf-backoffice-login/backoffice-login.es.js'
    ),
  activeWhen: isActive.login,
});

registerApplication({
  name: '@ft/backoffice-nav',
  app: () =>
    import(
      /* webpackIgnore: true */
      'https://thedoctor46super.github.io/mf-backoffice-nav/backoffice-nav.es.js'
    ),
  activeWhen: isActive.navbar,
});

registerApplication({
  name: '@ft/backoffice-home',
  app: () =>
    import(
      /* webpackIgnore: true */
      'https://thedoctor46super.github.io/mf-backoffice-home/backoffice-home.es.js'
    ),
  activeWhen: isActive.home,
});

registerApplication({
  name: '@ft/backoffice-about',
  app: () =>
    import(
      /* webpackIgnore: true */
      'https://thedoctor46super.github.io/mf-backoffice-about/backoffice-about.es.js'
    ),
  activeWhen: isActive.about,
});

start();
