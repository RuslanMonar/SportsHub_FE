import { api } from './../Config/Axios';

const GetUser = () => {
  return api().get("User/get").then
  ((response) => {
    return response.data;
  })
}

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

const SwitchRole = () => {
  if (localStorage.getItem("hasAdminView") == "true"){
    localStorage.setItem("hasAdminView", false);
  } else{
    localStorage.setItem("hasAdminView", true);
  }
}

const SendForgotPasswordEmail = (email) => {
  return api().post("Auth/forgot", {email})
  .then((response) => {
    return response;
  });
};

const ResetPassword = (email, resetToken, newPassword) => {
  return api().post("Auth/reset", {
    "email": email,
    "token": resetToken,
    "newPassword": newPassword
  })
  .then((response) => {
    return response;
  });
}

export default {
  SignUp,
  SignIn,
  FbAuth,
  GoogleAuth,
  SendForgotPasswordEmail,
  ResetPassword,
  GetUser,
  SwitchRole
};
