import { wishlistService } from '../services/wishlist.service.js';
import { asyncHandler } from '../utils/helper.js';
import { sendSuccess } from '../utils/response.js';

export const wishlistController = {
  list: asyncHandler(async (req, res) => {
    sendSuccess(res, await wishlistService.list(req.user._id), 'Wishlist loaded');
  }),

  add: asyncHandler(async (req, res) => {
    sendSuccess(res, await wishlistService.add(req.user._id, req.validated.body), 'Added to wishlist', 201);
  }),

  remove: asyncHandler(async (req, res) => {
    await wishlistService.remove(req.user._id, req.validated.params.productKey);
    sendSuccess(res, null, 'Removed from wishlist');
  })
};
