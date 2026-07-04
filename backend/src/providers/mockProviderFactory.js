import { BaseProvider } from './base.provider.js';
import { basePrices, catalog, providerPrices } from './mockCatalog.js';
import { delay } from '../utils/helper.js';

export class MockGroceryProvider extends BaseProvider {
  constructor(config) {
    super(config);
  }

  async searchProducts(query) {
    await delay(80 + Math.random() * 160);
    const normalizedQuery = query.toLowerCase();
    const priceConfig = providerPrices[this.id];

    return catalog
      .map((item, index) => ({ item, index }))
      .filter(({ item }) =>
        [item.name, item.brand, item.category, ...item.keywords].join(' ').toLowerCase().includes(normalizedQuery)
      )
      .map(({ item, index }) => {
        const multiplier = priceConfig.multipliers[index] || 1;
        const price = Math.round(basePrices[index] * multiplier);
        return this.normalize({
          ...item,
          id: `${this.id}-${item.id}`,
          price,
          mrp: Math.round(price * 1.12),
          available: !(this.id === 'instamart' && item.id === 'rice-daawat-5kg'),
          productUrl: `${priceConfig.baseUrl}${encodeURIComponent(item.name)}`,
          deliveryEta: priceConfig.eta
        });
      });
  }
}
