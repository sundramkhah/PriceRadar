import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    productKey: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: String,
    bestPrice: Number,
    provider: String,
    productUrl: String
  },
  { timestamps: true }
);

wishlistSchema.index({ user: 1, productKey: 1 }, { unique: true });

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);
