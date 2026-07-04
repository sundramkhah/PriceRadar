import { SearchHistory } from '../models/SearchHistory.js';
import { catalog } from '../providers/mockCatalog.js';
import { providers } from '../providers/index.js';
import { aggregationService } from './aggregation.service.js';
import { cacheService } from './cache.service.js';

const cacheKey = (query) => `search:${query.toLowerCase().trim()}`;

export const searchService = {
  async search(query, userId = null) {
    const normalizedQuery = query.trim();
    const cached = await cacheService.get(cacheKey(normalizedQuery));

    if (cached) {
      if (userId) await this.recordHistory(userId, normalizedQuery, cached.length);
      return { items: cached, cache: 'hit' };
    }

    const providerResults = await Promise.allSettled(
      providers.map((provider) => provider.searchProducts(normalizedQuery))
    );

    const offers = providerResults.flatMap((result) => (result.status === 'fulfilled' ? result.value : []));
    const comparisons = aggregationService.buildComparison(offers);

    await cacheService.set(cacheKey(normalizedQuery), comparisons);
    if (userId) await this.recordHistory(userId, normalizedQuery, comparisons.length);

    return { items: comparisons, cache: 'miss' };
  },

  suggestions(query) {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return [];

    return catalog
      .filter((item) => [item.name, item.brand, item.category, ...item.keywords].join(' ').toLowerCase().includes(normalizedQuery))
      .slice(0, 6)
      .map((item) => ({
        label: item.name,
        brand: item.brand,
        category: item.category,
        imageUrl: item.imageUrl
      }));
  },

  recordHistory(userId, query, resultCount) {
    return SearchHistory.create({ user: userId, query, resultCount });
  },

  history(userId) {
    return SearchHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(20);
  }
};
