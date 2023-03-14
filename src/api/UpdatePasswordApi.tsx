import axios from 'axios';
import { baseUrl } from "../costants";

export const updatePasswordApi = (newPassword: string, id: number) => {
  console.log(newPassword)
  console.log(id)
  axios.put(`${baseUrl}/updatePassword`, { password: newPassword, id: id })
    .then(res => console.log('res', res))
    .catch(error => console.log(error))
}