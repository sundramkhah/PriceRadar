import { api } from './api.js';

export const productService = {
  search: (params) => api.get('/products/search', { params }),
  suggestions: (q) => api.get('/search/suggestions', { params: { q } }),
  history: () => api.get('/search/history')
};
