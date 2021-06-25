import { NextFunction, Request, Response } from "express";
import { GeneralError } from "../utils/Errors";

class ErrorMiddleware {
  static logErrors = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (!(error instanceof GeneralError)) {
      console.log(error.stack);
    }
    next(error);
  }

  static handle(error: Error, request: Request, response: Response, next: NextFunction) {
    if (error instanceof GeneralError) {
      return response.status(error.getCode()).json({
        status: 'Business Exception!',
        message: error.message
      });
    }

    return response.status(500).json({
      status: 'Server Error!',
      message: error.message
    });
  }
}

export { ErrorMiddleware }

