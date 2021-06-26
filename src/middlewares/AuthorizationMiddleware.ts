import { NextFunction, Request, Response } from "express";
import { Forbidden, Unauthorized } from "../utils/Errors";
import { JsonWebTokenError, TokenExpiredError, verify, decode } from 'jsonwebtoken'

interface ITokenPayload {
  sub: string;
  admin: boolean;
}
class AuthorizationMiddleware {

  static ensureSession = (request: Request, response: Response, next: NextFunction) => {

    const token = request.headers.authorization?.replace('Bearer ', '');

    const secret = process.env.TOKEN_SECRET;

    try {

      const { sub, admin } = verify(token, secret) as ITokenPayload;
      request.userId = sub;
      request.admin = admin;

    } catch (error) {
      if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
        throw new Unauthorized('You shall not pass!');
      }
    }

    return next();
  }

  static ensureAdmin = (request: Request, response: Response, next: NextFunction) => {

    const admin = request.admin;

    if (!(admin)) {
      throw new Forbidden('You are too weak!');
    }

    return next();
  }
}


export {
  AuthorizationMiddleware
}