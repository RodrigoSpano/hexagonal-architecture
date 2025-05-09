import { User } from "../../core/entities/user.entity";
import { IUserRepository } from "../../core/repositories/user.repository";

export class UserCreator {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async run(email: string, password: string): Promise<User> {
    const user = new User(email, password);
    return await this.userRepository.save(user);
  }
}
