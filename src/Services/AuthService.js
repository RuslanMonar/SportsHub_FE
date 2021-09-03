import { api } from './../Config/Axios';


const SignUp = (firstName, lastName, email, password) => {
  let data = { firstName, lastName, email, password };
  return api().post("Auth/register", data)
    .then((response) => {
      if (response.data.token) AddToStorage(response.data.token);     
      return response;
    });
};

const SignIn = (email, password) => {
  let data = {email, password };
  return api().post("Auth/login", data)
    .then((response) => {
      if (response.data.token) AddToStorage(response.data.token);   
      return response;
    });
};

const FbAuth = (AccessToken) => {
  let data = {AccessToken}
  return api().post("Auth/FBlogin", data)
    .then((response) => {
      if (response.data.token) AddToStorage(response.data.token);   
      return response;
    });
}

const GoogleAuth = (data) => {
  return api().post("Auth/GoogleLogin" , data)
  .then((response) => {
    if (response.data.token) AddToStorage(response.data.token);   
      return response;
  })
  
}

const AddToStorage = (token) => {
  localStorage.setItem("user", JSON.stringify(token));
}

const SendForgotPasswordEmail = (email) => {
  return api().post("Auth/forgot", {email})
  .then((response) => {
    return response;
  });
};

export default {
  SignUp,
  SignIn,
  FbAuth,
  GoogleAuth,
  SendForgotPasswordEmail
};
