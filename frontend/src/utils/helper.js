export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const storeLogoFallback = (provider) => `/logos/${provider}.svg`;
