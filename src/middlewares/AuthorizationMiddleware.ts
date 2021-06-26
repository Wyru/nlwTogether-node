import { NextFunction, Request, Response } from "express";
import { Forbidden, Unauthorized } from "../utils/Errors";

class AuthorizationMiddleware {
  static ensureSession = (request: Request, response: Response, next: NextFunction) => {

    // Obtém jwt
    // Valida

    const isValidJWT = true;

    if (!isValidJWT) {
      throw new Unauthorized('You shall not pass!');
    }

    return next();
  }

  static ensureAdmin = (request: Request, response: Response, next: NextFunction) => {

    // Obtém jwt
    // Valida

    const isAdmin = true;

    if (!isAdmin) {
      throw new Forbidden('You are too weak!');
    }

    return next();
  }
}


export {
  AuthorizationMiddleware
}