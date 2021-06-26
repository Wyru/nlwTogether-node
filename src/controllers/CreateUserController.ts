import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  static async handle(request: Request, response: Response) {

    const { name, email, admin, password } = request.body;

    const user = await CreateUserService.execute({
      name, email, admin, password
    });

    return response.json(user);
  }
}


export { CreateUserController }