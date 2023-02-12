import axios from 'axios';
import { baseUrl } from "../costants";

export const updatePasswordApi = (newPassword: string) => {

  return axios.put(baseUrl + `/updatePassword/1`, { password: newPassword })
    .then(res => {
      console.log(res)
    })
}