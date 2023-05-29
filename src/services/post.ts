import { IRegisterUser } from "@/interfaces/forms";
import api from ".";
import { IRegisterResponse } from "../interfaces/responses";

export const registerUser = (
  data: IRegisterUser
): Promise<IRegisterResponse> => {
  const response = api
    .post("/register", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));

  return response;
};
