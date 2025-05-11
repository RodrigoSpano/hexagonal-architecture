import { User } from "../../user/core/entities/user.entity";
import type { Request } from "express";

export interface IcreateUserRequest extends Request {
  body: Omit<User, "id">;
}

export interface IgetUserByEmailRequest extends Request {
  params: { email: string };
}
