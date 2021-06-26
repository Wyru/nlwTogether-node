import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

class GetTagsService {

  static async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return tags;
  }
}


export { GetTagsService }