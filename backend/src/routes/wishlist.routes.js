import { Router } from 'express';
import { wishlistController } from '../controllers/wishlist.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { productKeyParamSchema, wishlistSchema } from '../validations/product.validation.js';

export const wishlistRoutes = Router();

wishlistRoutes.use(authenticate);
wishlistRoutes.get('/', wishlistController.list);
wishlistRoutes.post('/', validate(wishlistSchema), wishlistController.add);
wishlistRoutes.delete('/:productKey', validate(productKeyParamSchema), wishlistController.remove);
