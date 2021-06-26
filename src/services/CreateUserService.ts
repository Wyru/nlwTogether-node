import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { BadRequest } from "../utils/Errors";
import { ValidateObject } from "../utils/ValidateObject";
import * as yup from 'yup';
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

const userRequestSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  admin: yup.bool().optional(),
});

class CreateUserService {

  static async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const validation = ValidateObject.execute({ name, email, admin }, userRequestSchema);

    if (!validation.isValid) {
      throw new BadRequest(validation.message);
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new BadRequest('User Already Exists!');
    }

    const user = usersRepository.create({
      name, email, admin: !!admin
    });

    await usersRepository.save(user);

    return user;
  }
}


export { CreateUserService }