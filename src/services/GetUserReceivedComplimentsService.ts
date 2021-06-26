import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class GetUserReceivedComplimentsService {

  static async execute(userId: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        userReceiverId: userId,
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}


export { GetUserReceivedComplimentsService }