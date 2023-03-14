import axios from "axios";
import { IUserRegister } from "../interfaces/user-interface";
import { baseUrl } from "../costants"

export const registerApi = (registerParameters: IUserRegister) => {
  return axios.post(`${baseUrl}/register`, registerParameters)
    .then(res => {
      return res
    })
    .catch((error) => {
      console.log(error)
    })
}