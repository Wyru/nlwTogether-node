import { Request, Response } from "express";
import { GetUserSendedComplimentsService } from "../services/GetUserSendedComplimentsService";

class GetUserSendedComplimentsController {
  static async handle(request: Request, response: Response) {

    const userId = request.userId;

    const compliments = await GetUserSendedComplimentsService.execute(userId);

    return response.json(compliments);
  }
}


export { GetUserSendedComplimentsController }