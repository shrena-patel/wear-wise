const webhookMiddleware = (req, res, next) => {
  // Check if the request is for the webhook route
  if (req.path.startsWith('https://play.svix.com')) {
    // Allow the request to proceed
    next();
  } else {
    // For other routes, handle authentication or perform other checks
    // ...
    // throw new Error('oops an error')
    // If the request is authorized or doesn't require authentication, call next()
    next();
  }
};

export default webhookMiddleware