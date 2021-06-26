import { Request, Response } from "express";
import { GetUsersService } from "../services/GetUsersService";

class GetUserController {
  static async handle(request: Request, response: Response) {

    const user = await GetUsersService.execute();

    return response.json(user);
  }
}


export { GetUserController }