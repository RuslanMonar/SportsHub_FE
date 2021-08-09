import axios from "axios";
import { API_URL } from './../Config/GlobalVariables';

function api() {
    const api = axios.create({
        baseURL: 'https://localhost:5001/api/',
        //withCredentials: true,
        
    })
    return api
}

const SignUp = (firstName, lastName, email , password) => {
    let data = { firstName, lastName, email , password}
    return api().post("Auth/register", data)
    
};


  export default {
    SignUp
  };
  