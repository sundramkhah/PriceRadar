import { searchService } from './search.service.js';

export const productService = {
  async compareProducts(query, { sort = 'best', provider = 'all', availableOnly = false } = {}) {
    const result = await searchService.search(query);
    let items = result.items.map((item) => ({
      ...item,
      offers: item.offers.filter((offer) => {
        const providerMatch = provider === 'all' || offer.provider === provider;
        const availabilityMatch = !availableOnly || offer.available;
        return providerMatch && availabilityMatch;
      })
    }));

    items = items.filter((item) => item.offers.length > 0);

    if (sort === 'price_desc') {
      items.sort((a, b) => (b.bestOffer?.price || 0) - (a.bestOffer?.price || 0));
    } else if (sort === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      items.sort((a, b) => (a.bestOffer?.price || Infinity) - (b.bestOffer?.price || Infinity));
    }

    return { ...result, items };
  }
};
