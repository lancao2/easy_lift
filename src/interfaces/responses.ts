import { IRegisterUser } from "@/interfaces/forms";

export interface IRegisterResponse extends IRegisterUser {
  created_at: Date;
  updated_at: Date;
}
