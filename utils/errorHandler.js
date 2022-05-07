class ErrorHandler extends Error {
   constructor(message, statusCode, errorCode) {
      super(message);
      this.statusCode = statusCode;
      this.errorCode = errorCode;

      Error.captureStackTrace(this, this.constructor);
   }
}
export default ErrorHandler;

/**
 *  next-connect error handling
 */
export const errorHandler = {
   onError: (err, req, res, next) => {
      res.status(err.statusCode || 500).json({
         success: false,
         message: `Error while creating new room: ${err.message}`,
         error: err.errorCode || "ERR",
      });
      next();
   },
   onNoMatch: (req, res) => {
      res.status(404).json({
         success: false,
         message: `Page is not found`,
         error: "ERR_PAGE_NOT_FOUND",
      });
   },
};
