import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    canonicalName: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true },
    brand: { type: String, trim: true },
    category: { type: String, trim: true, index: true },
    quantity: { type: String, trim: true },
    imageUrl: String,
    keywords: [{ type: String, index: true }]
  },
  { timestamps: true }
);

productSchema.index({ canonicalName: 'text', brand: 'text', category: 'text', keywords: 'text' });

export const Product = mongoose.model('Product', productSchema);
