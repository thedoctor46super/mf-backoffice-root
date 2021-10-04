export function navbar(location) {
  return !location.pathname.includes('/mf-backoffice-root/login');
}

export function login(location) {
  console.log({ location });
  return location.pathname === '/mf-backoffice-root/login';
}

export function about(location) {
  return location.pathname === '/mf-backoffice-root/about';
}

export function home(location) {
  return (
    location.pathname === '/mf-backoffice-root/' ||
    location.pathname === '/mf-backoffice-root/home'
  );
}
