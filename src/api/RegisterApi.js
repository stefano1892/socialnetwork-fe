import axios from "axios";
import { baseUrl } from "../costants"

export const registerApi = (registerParameters) => {
  return axios.post(`${baseUrl}/register`, registerParameters)
    .then(res => {
      return res
    })
    .catch((error) => {
      console.log(error)
    })
}