
import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@ft/backoffice-nav",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3001/src/main.js"
    ),
  activeWhen: isActive.navbar,
});

registerApplication({
  name: "@ft/backoffice-login",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3002/src/main.js"
    ),
  activeWhen: isActive.login,
});

registerApplication({
  name: "@ft/backoffice-home",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3003/src/main.js"
    ),
  activeWhen: isActive.home,
});

registerApplication({
  name: "@ft/backoffice-about",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3004/src/main.js"
    ),
  activeWhen: isActive.about,
});

start({
  urlRerouteOnly: true,
});
