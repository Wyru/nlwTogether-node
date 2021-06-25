import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { BadRequest } from "../utils/errors";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new BadRequest('An email must be provided!');
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