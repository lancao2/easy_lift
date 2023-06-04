import { IRegisterUser } from "@/interfaces/forms";
import api from ".";
import { IRegisterResponse } from "../interfaces/responses";

export const registerUser = (data: IRegisterUser) => {
  const response = api
    .post("/register", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response?.data?.error || "Erro desconhecido");
    });
  return response;
};
