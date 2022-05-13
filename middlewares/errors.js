import ErrorHandler from "../utils/errorHandler";

/**
 * error handler for APIs
 */

const onError = ( err, req, res ) => {
   let error = {...err}
   error.message = err.message

   // Wrong Mongoose Object ID Error
   if ( err.name === 'CastError' )
   {
      const message = `Resource not found. Invalid: ${ err.path }`
      error = new ErrorHandler( message, 400 );
   }

   // Handling Mongoose validation error
   if ( err.name === 'ValidationError' )
   {
      const message = Object.values( err.errors ).map(value=>value.message)
      error = new ErrorHandler(message,400,'ERR_VALIDATION_ERROR')
   }

   res.status(err.statusCode || 500).json({
      success: false,
      error,
      message: error.message,
      stack: err.stack,
   });
};

export default onError;
