import { authService } from '../services/auth.service.js';
import { asyncHandler } from '../utils/helper.js';
import { sendSuccess } from '../utils/response.js';

export const authController = {
  register: asyncHandler(async (req, res) => {
    const data = await authService.register(req.validated.body);
    sendSuccess(res, data, 'Registration successful', 201);
  }),

  login: asyncHandler(async (req, res) => {
    const data = await authService.login(req.validated.body);
    sendSuccess(res, data, 'Login successful');
  }),

  me: asyncHandler(async (req, res) => {
    sendSuccess(res, authService.me(req.user), 'Profile loaded');
  })
};
