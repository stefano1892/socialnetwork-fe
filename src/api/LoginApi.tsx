import axios from "axios";
import { IUserLogin } from "../interfaces/user-interface";
import { baseUrl } from "../costants";


export const loginApi = async (loginParameters: IUserLogin) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, loginParameters);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}