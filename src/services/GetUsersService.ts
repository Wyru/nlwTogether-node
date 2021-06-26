import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

class GetUsersService {

  static async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const users = await usersRepository.find();

    return users;
  }
}


export { GetUsersService }