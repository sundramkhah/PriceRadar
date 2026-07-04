import { Router } from 'express';
import { searchController } from '../controllers/search.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { suggestionSchema } from '../validations/product.validation.js';

export const searchRoutes = Router();

searchRoutes.get('/suggestions', validate(suggestionSchema), searchController.suggestions);
searchRoutes.get('/history', authenticate, searchController.history);
