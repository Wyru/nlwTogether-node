import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  static async handle(request: Request, response: Response) {

    const { name, email, admin } = request.body;

    const user = await CreateUserService.execute({
      name, email, admin
    });

    return response.json(user);
  }
}


export { CreateUserController }