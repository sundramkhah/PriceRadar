import { AppError } from '../utils/response.js';
import { logger } from '../config/logger.js';

export const notFound = (req, _res, next) => {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404));
};

export const errorMiddleware = (error, _req, res, _next) => {
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? 'Something went wrong' : error.message;

  if (statusCode >= 500) {
    logger.error(error.message, error.stack);
  }

  res.status(statusCode).json({
    success: false,
    message,
    details: error.details || undefined
  });
};
