import { User } from "../../core/entities/user.entity";
import type { IUserRepository } from "../../core/repositories/user.repository";

export class UserGetAll {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async run(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
