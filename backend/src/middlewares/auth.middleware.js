import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { AppError } from '../utils/response.js';
import { User } from '../models/User.js';

export const authenticate = async (req, _res, next) => {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith('Bearer ') ? header.split(' ')[1] : null;
    if (!token) throw new AppError('Authentication required', 401);

    const decoded = jwt.verify(token, env.jwtSecret);
    const user = await User.findById(decoded.id).select('-passwordHash');
    if (!user) throw new AppError('User no longer exists', 401);

    req.user = user;
    next();
  } catch (error) {
    next(error instanceof AppError ? error : new AppError('Invalid or expired token', 401));
  }
};

export const optionalAuth = async (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return next();
  return authenticate(req, _res, next);
};
