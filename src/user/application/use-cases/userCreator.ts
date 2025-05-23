import { User } from "../../core/entities/user.entity";
import { IUserRepository } from "../../core/repositories/user.repository";

export class UserCreator {
  private readonly userRepository: IUserRepository; // Dependency Inversion
  constructor(userRepository: IUserRepository) {
    // Dependency Injection
    this.userRepository = userRepository;
  }

  public async run(email: string, password: string): Promise<User> {
    const user = new User(email, password);
    return await this.userRepository.save(user);
  }
}
