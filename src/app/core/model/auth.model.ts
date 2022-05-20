import { UserModel } from "./user.model";

export interface AuthModel{
  token: string;
  refreshToken: string;
  user: UserModel;
}
