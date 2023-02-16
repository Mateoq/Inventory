export const componentProps = {
  ACTIVE: 'active',
  ALIGNMENT: 'alignment',
  AS: 'as',
  CSS: 'css',
  DISPLAY_ONLY: 'displayOnly',
  ELLIPSIS: 'ellipsis',
  ERROR: 'error',
  IS_HEADING: 'isHeading',
  LAST: 'last',
  OPEN: 'open',
  SECONDARY: 'secondary',
  SHOW: 'show',
  UNDERLINED: 'underlined'
};

export const patterns = {
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
};

export const slicerNames = {
  TOAST: 'toast',
  SESSION: 'session',
  COMPANIES: 'companies'
};

export const servicesStrs = {
  TOKEN_COOKIE: 'token'
};

export const paths = {
  HOME: '/',
  AUTH: '/auth'
};

export const apiServices = {
  createCompany: '/api/companies/create',
  updateCompany: '/api/companies/update',
  deleteCompany: '/api/companies/delete',
  login: '/api/login',
  logout: '/api/logout'
};
