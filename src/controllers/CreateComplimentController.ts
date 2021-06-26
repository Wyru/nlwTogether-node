import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  static async handle(request: Request, response: Response) {

    const {
      userReceiverId,
      tagId,
      message,
    } = request.body;

    const userSenderId = request.userId;

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