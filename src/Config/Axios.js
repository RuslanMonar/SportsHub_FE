import  axios  from "axios";
import { API_URL } from "./GlobalVariables";

// ------- Setting for Axios -------
export function api() {
  const api = axios.create({
    baseURL: API_URL,
    //withCredentials: true,
  });
  return api;
}
