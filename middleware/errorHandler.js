const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500);
  res.json({
    message: err.message || "Server Error",
    stack: err.stack,
  });
};

module.exports = errorHandler;
