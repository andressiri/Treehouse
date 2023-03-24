// overwrite express default error handler
import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  const statusCode = !res.statusCode
    ? 500
    : res.statusCode < 400
    ? 500
    : res.statusCode;
  const message =
    statusCode >= 500
      ? `Contact the administrator, server error: ${err.message}`
      : err.message;

  if (process.env.NODE_ENV === "development") console.log(err.stack); // eslint-disable-line no-console

  res.status(statusCode).json({ message });

  next();
};

export default errorHandler;
