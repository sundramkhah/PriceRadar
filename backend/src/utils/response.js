export const sendSuccess = (res, data, message = 'Success', statusCode = 200, meta = undefined) => {
  res.status(statusCode).json({ success: true, message, data, meta });
};

export class AppError extends Error {
  constructor(message, statusCode = 500, details = undefined) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true;
  }
}
