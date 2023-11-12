import axios from 'axios';
import { baseUrl } from "../costants";

export const updatePasswordApi = async (newPassword, id) => {
  return await axios.put(`${baseUrl}/updatePassword`, { password: newPassword, id: id })
    .then(res => {
      return res.status
    })
    .catch(error => console.log(error))
}

export const updateSettings = async (id, values) => {
  return await axios.put(`${baseUrl}/updateBaseSettings`, { id, values })
    .then(res => {
      return res.status
    })
    .catch(error => console.log(error))
}