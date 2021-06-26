import { getCustomRepository } from "typeorm";
import { BadRequest } from "../utils/Errors";
import { ValidateObject } from "../utils/ValidateObject";
import * as yup from 'yup';
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ICreateTagRequest {
  name: string;
}

const createTagRequestSchema = yup.object().shape({
  name: yup.string().required()
});

class CreateTagService {

  async execute({ name }: ICreateTagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const validation = ValidateObject.execute({ name, }, createTagRequestSchema);

    if (!validation.isValid) {
      throw new BadRequest(validation.message);
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new BadRequest('Tag Already Exists!');
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}


export { CreateTagService }