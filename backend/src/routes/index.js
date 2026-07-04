import { Router } from 'express';
import { authRoutes } from './auth.routes.js';
import { productRoutes } from './product.routes.js';
import { searchRoutes } from './search.routes.js';
import { wishlistRoutes } from './wishlist.routes.js';

export const apiRoutes = Router();

apiRoutes.get('/health', (_req, res) => {
  res.json({ success: true, message: 'Price comparison API is healthy' });
});

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/products', productRoutes);
apiRoutes.use('/search', searchRoutes);
apiRoutes.use('/wishlist', wishlistRoutes);
