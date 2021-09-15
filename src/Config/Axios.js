import axios from "axios";
import { API_URL } from "./GlobalVariables";

const isNull = (user) => {
  return user === null;
}

// ------- Setting for Axios -------
export function api() {
  var user = localStorage.getItem("user");
  const api = axios.create({

    baseURL: API_URL,
    //withCredentials: true,
    headers: {
      Authorization: 'Bearer ' + isNull(user) ? null : user.replace(/['"]+/g, '')
    }
  });
  return api;
}
