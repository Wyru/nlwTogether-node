import { Request, Response } from "express";
import { GetUserReceivedComplimentsService } from "../services/GetUserReceivedComplimentsService";

class GetUserReceivedComplimentsController {
  static async handle(request: Request, response: Response) {

    const userId = request.userId;

    const compliments = await GetUserReceivedComplimentsService.execute(userId);

    return response.json(compliments);
  }
}


export { GetUserReceivedComplimentsController }