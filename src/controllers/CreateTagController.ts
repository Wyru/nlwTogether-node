import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
  static async handle(request: Request, response: Response) {
    const createTagService = new CreateTagService();

    const { name } = request.body;

    const user = await createTagService.execute({
      name
    });

    return response.json(user);
  }
}


export { CreateTagController }