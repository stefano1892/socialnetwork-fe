import axios from "axios";
import { IUserLogin } from "../interfaces/user-interface";
import { baseUrl } from "../costants";


export const loginApi = (loginParameters: IUserLogin) => {

  return axios.post(baseUrl + "/login", loginParameters)
    .then(res => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })
}