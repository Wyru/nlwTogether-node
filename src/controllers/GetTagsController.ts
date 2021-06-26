import { Request, Response } from "express";
import { GetTagsService } from "../services/GetTagsService";

class GetTagsController {
  static async handle(request: Request, response: Response) {

    const user = await GetTagsService.execute();

    return response.json(user);
  }
}


export { GetTagsController }