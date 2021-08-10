import axios from "axios";
import { API_URL } from "./../Config/GlobalVariables";

function api() {
  const api = axios.create({
    baseURL: API_URL,
    //withCredentials: true,
  });
  return api;
}

const SignUp = (firstName, lastName, email, password) => {
  let data = { firstName, lastName, email, password };
  return api().post("Auth/register", data)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }
      return response;
    });
};

export default {
  SignUp,
};
