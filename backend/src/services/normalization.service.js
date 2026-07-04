import { slugify } from '../utils/helper.js';

export const normalizationService = {
  normalizeOffer(offer) {
    return {
      ...offer,
      productKey: slugify(`${offer.brand || 'generic'}-${offer.name}-${offer.quantity || ''}`),
      discountPercent: offer.mrp ? Math.max(0, Math.round(((offer.mrp - offer.price) / offer.mrp) * 100)) : 0
    };
  }
};
