/**
 *  next-connect error handling
 */
 const errorHandlerNextConnect = {
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

export default errorHandlerNextConnect;
