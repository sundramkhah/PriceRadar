import { isSimilarProduct } from '../utils/fuzzyMatch.js';
import { normalizationService } from './normalization.service.js';

const groupOffers = (offers) => {
  const groups = [];

  for (const offer of offers.map(normalizationService.normalizeOffer)) {
    const group = groups.find((candidate) => isSimilarProduct(candidate.reference, offer));
    if (group) {
      group.offers.push(offer);
      continue;
    }

    groups.push({
      productKey: offer.productKey,
      reference: offer,
      offers: [offer]
    });
  }

  return groups;
};

export const aggregationService = {
  buildComparison(offers) {
    return groupOffers(offers).map((group) => {
      const availableOffers = group.offers.filter((offer) => offer.available);
      const bestOffer = availableOffers.sort((a, b) => a.price - b.price)[0] || null;

      return {
        productKey: group.productKey,
        name: group.reference.name,
        brand: group.reference.brand,
        category: group.reference.category,
        quantity: group.reference.quantity,
        imageUrl: group.reference.imageUrl,
        bestOffer,
        offers: group.offers.sort((a, b) => a.price - b.price)
      };
    });
  }
};
