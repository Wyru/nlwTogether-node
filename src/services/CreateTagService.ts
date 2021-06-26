import { getCustomRepository } from "typeorm";
import { BadRequest } from "../utils/Errors";
import { ValidateObject } from "../utils/ValidateObject";
import * as yup from 'yup';
import { TagsRepository } from "../repositories/TagsRepository";

interface ICreateTagRequest {
  name: string;
}

const createTagRequestSchema = yup.object().shape({
  name: yup.string().required()
});

class CreateTagService {

  static async execute({ name }: ICreateTagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    const validation = ValidateObject.execute({ name, }, createTagRequestSchema);

    if (!validation.isValid) {
      throw new BadRequest(validation.message);
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new BadRequest('Tag Already Exists!');
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag;
  }
}


export { CreateTagService }