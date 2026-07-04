import { Product } from '../models/Product.js';
import { Price } from '../models/Price.js';
import { slugify } from '../utils/helper.js';

export const productRepository = {
  async upsertCanonicalProduct(product) {
    const slug = slugify(`${product.brand || 'generic'}-${product.name}-${product.quantity || ''}`);
    return Product.findOneAndUpdate(
      { slug },
      {
        canonicalName: product.name,
        slug,
        brand: product.brand,
        category: product.category,
        quantity: product.quantity,
        imageUrl: product.imageUrl,
        keywords: product.keywords || []
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  },

  async upsertPrice(productId, offer) {
    return Price.findOneAndUpdate(
      { provider: offer.provider, providerProductId: offer.providerProductId },
      {
        product: productId,
        provider: offer.provider,
        providerProductId: offer.providerProductId,
        price: offer.price,
        mrp: offer.mrp,
        currency: offer.currency || 'INR',
        available: offer.available,
        productUrl: offer.productUrl,
        imageUrl: offer.imageUrl,
        lastFetchedAt: new Date()
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  },

  search: (query, limit = 8) =>
    Product.find({ $text: { $search: query } }, { score: { $meta: 'textScore' } })
      .sort({ score: { $meta: 'textScore' } })
      .limit(limit)
};
