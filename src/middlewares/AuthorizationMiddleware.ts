import { NextFunction, Request, Response } from "express";
import { Forbidden, Unauthorized } from "../utils/Errors";
import { JsonWebTokenError, TokenExpiredError, verify, decode } from 'jsonwebtoken'
class AuthorizationMiddleware {

  static ensureSession = (request: Request, response: Response, next: NextFunction) => {

    const token = request.headers.authorization?.replace('Bearer ', '');

    const secret = process.env.TOKEN_SECRET;

    try {

      verify(token, secret);

    } catch (error) {
      if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
        throw new Unauthorized('You shall not pass!');
      }
    }

    return next();
  }

  static ensureAdmin = (request: Request, response: Response, next: NextFunction) => {

    const token = request.headers.authorization?.replace('Bearer ', '');

    const result = decode(token, {
      json: true
    }) as any;

    //TODO: talvez seja melhor verificar na base de dados a permissão

    if (!(result.admin)) {
      throw new Forbidden('You are too weak!');
    }

    return next();
  }
}


export {
  AuthorizationMiddleware
}