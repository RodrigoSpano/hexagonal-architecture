import { User } from "../../core/entities/user.entity";
import { IUserRepository } from "../../core/repositories/user.repository";

export class UserGetByEmail {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async run(email: string): Promise<User> {
    return await this.userRepository.getByEmail(email);
  }
}
