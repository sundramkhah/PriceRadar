import { searchService } from '../services/search.service.js';
import { asyncHandler } from '../utils/helper.js';
import { sendSuccess } from '../utils/response.js';

export const searchController = {
  suggestions: asyncHandler(async (req, res) => {
    sendSuccess(res, searchService.suggestions(req.validated.query.q), 'Suggestions loaded');
  }),

  history: asyncHandler(async (req, res) => {
    const history = await searchService.history(req.user._id);
    sendSuccess(res, history, 'Search history loaded');
  })
};
