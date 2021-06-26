import { Request } from "express";
import { decode } from "jsonwebtoken";

class GetTokenPayload {
  static execute(request: Request) {
    const token = request.headers.authorization?.replace('Bearer ', '');
    const payload = decode(token, {
      json: true
    }) as any;

    return payload as {
      email: string,
      admin: boolean,
      sub: string
    };
  }
}


export { GetTokenPayload }

