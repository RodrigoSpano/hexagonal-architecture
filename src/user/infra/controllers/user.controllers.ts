import { Request, type Response } from "express";
import { UserCreator } from "../../application/use-cases/userCreator";
import { UserGetByEmail } from "../../application/use-cases/userGetByEmail";
import type {
  IcreateUserRequest,
  IgetUserByEmailRequest,
} from "../../../types/user/user";
import { MemoryDbRepository } from "../fakeDb/memoryDbRepository";
import { UserGetAll } from "../../application/use-cases/userGetAll";

// infra > db repo
const memoryDbRepository = new MemoryDbRepository();
// ---- app layer >> use-cases >> high-level classes
const userCreator = new UserCreator(memoryDbRepository);
const userGetByEmail = new UserGetByEmail(memoryDbRepository);
const userGetAll = new UserGetAll(memoryDbRepository);

export async function getUserByEmailController(
  req: IgetUserByEmailRequest,
  res: Response
): Promise<any> {
  const { email } = req.params;
  // too tired to make validations
  const user = await userGetByEmail.run(email);
  return res.status(200).json({ user });
}

export async function createUserController(
  req: IcreateUserRequest,
  res: Response
): Promise<any> {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Bad Request, email and password are required!" });
  const user = await userCreator.run(email, password);
  return res.status(201).json({ user });
}

export async function getAllUsersController(
  req: Request,
  res: Response
): Promise<any> {
  const users = await userGetAll.run();
  return res.status(200).json({ users });
}
