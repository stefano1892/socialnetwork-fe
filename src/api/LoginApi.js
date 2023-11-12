import axios from "axios";
import { baseUrl } from "../costants";


export const loginApi = async (loginParameters) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, loginParameters);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}