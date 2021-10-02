export function navbar(location) {
  return !location.pathname.includes('/login');
}

export function login(location) {
  return location.pathname === '/login';
}

export function about(location) {
  return location.pathname === '/about';
}

export function home(location) {
  return location.pathname === '/' || location.pathname === '/home';
}
