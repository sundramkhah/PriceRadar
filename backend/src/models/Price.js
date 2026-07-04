import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', index: true },
    provider: { type: String, required: true, index: true },
    providerProductId: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, min: 0 },
    currency: { type: String, default: 'INR' },
    available: { type: Boolean, default: true, index: true },
    productUrl: { type: String, required: true },
    imageUrl: String,
    lastFetchedAt: { type: Date, default: Date.now, index: true }
  },
  { timestamps: true }
);

priceSchema.index({ provider: 1, providerProductId: 1 }, { unique: true });
priceSchema.index({ product: 1, price: 1, available: 1 });

export const Price = mongoose.model('Price', priceSchema);
