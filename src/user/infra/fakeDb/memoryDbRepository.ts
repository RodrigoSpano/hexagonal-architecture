import { User } from "../../core/entities/user.entity";
import { IUserRepository } from "../../core/repositories/user.repository";
import { DB } from "./config/db";

export class MemoryDbRepository implements IUserRepository {
  public async save(user: User): Promise<User> {
    const alreadyExist = DB.find((el) => el.email === user.email);
    if (!alreadyExist) DB.push(user);
    return user;
  }
  public async getByEmail(email: string): Promise<User> {
    const user = DB.find((el) => el.email === email);
    if (user) return user;
    throw new Error("User not found.");
  }

  public async getAll(): Promise<User[]> {
    return DB;
  }
}
