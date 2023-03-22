import axios from 'axios';
import { baseUrl } from "../costants";
import { IBaseSettingsUser } from '../interfaces/user-interface';

export const updatePasswordApi = async (newPassword: string, id: number) => {
  return await axios.put(`${baseUrl}/updatePassword`, { password: newPassword, id: id })
    .then(res => {
      return res.status
    })
    .catch(error => console.log(error))
}

export const updateSettings = async (id: number, values: IBaseSettingsUser) => {
  return await axios.put(`${baseUrl}/updateBaseSettings`, { id, values })
    .then(res => {
      return res.status
    })
    .catch(error => console.log(error))
}