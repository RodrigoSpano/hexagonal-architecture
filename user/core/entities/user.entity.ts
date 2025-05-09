import { randomUUID } from "crypto";
export class User {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.id = randomUUID();
  }
}
