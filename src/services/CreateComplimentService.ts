import { getCustomRepository } from "typeorm";
import { BadRequest } from "../utils/Errors";
import { ValidateObject } from "../utils/ValidateObject";
import * as yup from 'yup';
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ICreateComplimentRequest {
  userSenderId: string;
  userReceiverId: string;
  tagId: string;
  message: string;
}

const userRequestSchema = yup.object().shape({
  userSenderId: yup.string().required(),
  userReceiverId: yup.string().required(),
  tagId: yup.string().required(),
  message: yup.string().required(),
});

class CreateComplimentService {

  static async execute({ userSenderId,
    userReceiverId,
    tagId,
    message }: ICreateComplimentRequest) {

    const validation = ValidateObject.execute({
      userSenderId,
      userReceiverId,
      tagId,
      message,
    }, userRequestSchema);

    if (!validation.isValid) {
      throw new BadRequest(validation.message);
    }

    if (userSenderId === userReceiverId) {
      throw new BadRequest("You can't create a compliment for yourself!");
    }


    const userRepository = getCustomRepository(UsersRepositories);
    const userReceiver = await userRepository.findOne(userReceiverId);
    if (!userReceiver) {
      throw new BadRequest("You must provide a valid receiver!");
    }

    const tagsRepository = getCustomRepository(TagsRepositories);
    const tag = await tagsRepository.findOne(tagId);
    if (!tag) {
      throw new BadRequest("You must provide a valid tag!");
    }

    const complimentsRepository = getCustomRepository(ComplimentsRepositories);

    const compliment = complimentsRepository.create({
      userSenderId,
      userReceiverId,
      tagId,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}


export { CreateComplimentService }