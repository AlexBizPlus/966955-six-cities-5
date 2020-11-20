export const MAX_COMMENTS = 10;
export const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const ICON_URL = `../img/pin.svg`;
export const ICON_ACTIVE_URL = `../img/pin-active.svg`;
export const ICON_SIZE = [27, 39];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const Routes = {
  HOME: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`
};

export const CommentLength = {
  MIN: 50,
  MAX: 300
};

export const SORT_LIST = [
  {
    text: `Popular`,
    id: `popular`
  },
  {
    text: `Price: low to high`,
    id: `low-to-high`
  },
  {
    text: `Price: high to low`,
    id: `high-to-low`
  },
  {
    text: `Top rated first`,
    id: `top-rated`
  },
];

export const STARS = [`terribly`, `badly`, `not bad`, `good`, `perfect`];
