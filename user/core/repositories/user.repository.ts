import { User } from "../entities/user.entity";

export interface IUserRepository {
  save(user: User): Promise<User>;
  getByEmail(email: string): Promise<User>;
}
