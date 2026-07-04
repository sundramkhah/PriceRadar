import { Wishlist } from '../models/Wishlist.js';

export const wishlistService = {
  list(userId) {
    return Wishlist.find({ user: userId }).sort({ createdAt: -1 });
  },

  add(userId, payload) {
    return Wishlist.findOneAndUpdate(
      { user: userId, productKey: payload.productKey },
      { ...payload, user: userId },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  },

  remove(userId, productKey) {
    return Wishlist.findOneAndDelete({ user: userId, productKey });
  }
};
