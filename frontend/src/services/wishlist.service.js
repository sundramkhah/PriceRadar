import { api } from './api.js';

export const wishlistService = {
  list: () => api.get('/wishlist'),
  add: (payload) => api.post('/wishlist', payload),
  remove: (productKey) => api.delete(`/wishlist/${productKey}`)
};
