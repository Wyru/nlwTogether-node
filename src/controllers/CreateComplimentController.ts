import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";
import { GetTokenPayload } from "../utils/GetTokenPayload";

class CreateComplimentController {
  static async handle(request: Request, response: Response) {

    const {
      userReceiverId,
      tagId,
      message,
    } = request.body;


    const { sub: userSenderId } = GetTokenPayload.execute(request);

    const compliment = await CreateComplimentService.execute({
      userSenderId,
      userReceiverId,
      tagId,
      message,
    });

    return response.json(compliment);
  }
}


export { CreateComplimentController }