import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"

class GetUserSendedCompliments {

  static async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return users;
  }
}


export { GetUserSendedCompliments }