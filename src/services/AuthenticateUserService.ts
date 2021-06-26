import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from 'yup';
import { BadRequest, Unauthorized } from "../utils/Errors";
import { ValidateObject } from "../utils/ValidateObject";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

const authenticateUserRequestSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

class AuthenticateUserService {
  static async execute({ email, password }: IAuthenticateUserRequest) {

    const validation = ValidateObject.execute({ email, password, }, authenticateUserRequestSchema);

    if (!validation.isValid) {
      throw new BadRequest(validation.message);
    }

    const userRepositories = getCustomRepository(UsersRepository);

    const user = await userRepositories.findOne({
      email
    });


    if (!user) {
      throw new Unauthorized('Email or password incorrect!');
    }

    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) {
      throw new Unauthorized('Email or password incorrect!');
    }

    const secret = process.env.TOKEN_SECRET;

    const token = sign({
      email: user.email,
      admin: user.admin
    },
      secret, {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;

  }
}

export { AuthenticateUserService };