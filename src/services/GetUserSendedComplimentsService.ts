import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class GetUserSendedComplimentsService {

  static async execute(userId: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        userSenderId: userId,
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}


export { GetUserSendedComplimentsService }