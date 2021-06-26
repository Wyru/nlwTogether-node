import { NextFunction, Request, Response } from "express";
import { Forbidden, Unauthorized } from "../utils/Errors";
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken'
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface ITokenPayload {
  sub: string;
  admin: boolean;
}
class AuthorizationMiddleware {

  static ensureSession(request: Request, response: Response, next: NextFunction) {

    const token = request.headers.authorization?.replace('Bearer ', '');

    const secret = process.env.TOKEN_SECRET;

    try {

      const { sub } = verify(token, secret) as ITokenPayload;
      request.userId = sub;

    } catch (error) {
      if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
        throw new Unauthorized('You shall not pass!');
      }
    }

    return next();
  }

  static async ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const userId = request.userId;

    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne(userId);

    if (!(user.admin)) {
      throw new Forbidden('You are too weak!');
    }

    return next();
  }
}


export {
  AuthorizationMiddleware
}