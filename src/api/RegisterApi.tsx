import axios from "axios";
import { IUserRegister } from "../interfaces/user-interface";
import { baseUrl } from "../costants"

export const registerApi = (registerParameters: IUserRegister) => {
  axios.post(baseUrl + "/register", registerParameters)
    .then(res => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
}