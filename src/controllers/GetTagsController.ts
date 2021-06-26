import { Request, Response } from "express";
import { GetTagsService } from "../services/GetTagsService";

class GetTagsController {
  static async handle(request: Request, response: Response) {

    const tags = await GetTagsService.execute();

    return response.json(tags);
  }
}


export { GetTagsController }