import { productService } from '../services/product.service.js';
import { asyncHandler } from '../utils/helper.js';
import { sendSuccess } from '../utils/response.js';

export const productController = {
  search: asyncHandler(async (req, res) => {
    const { q, page, limit, sort, provider, availableOnly } = req.validated.query;
    const result = await productService.compareProducts(q, { sort, provider, availableOnly });
    const start = (page - 1) * limit;
    const paginated = result.items.slice(start, start + limit);

    sendSuccess(res, paginated, 'Products compared', 200, {
      query: q,
      cache: result.cache,
      page,
      limit,
      total: result.items.length,
      totalPages: Math.ceil(result.items.length / limit) || 1
    });
  })
};
