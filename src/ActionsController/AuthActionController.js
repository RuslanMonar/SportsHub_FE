import AuthService from "../Services/AuthService"
import {SaveUserAction, RegisterFailAction, RegisterSuccessAction, LoginSuccessAction , LoginFailAction } from "../ActionsCreator/AuthActions";
import jwt_decode from "jwt-decode";

const SignUp = (FirstName, LastName, Email , Password) => (dispatch) => {
  return AuthService.SignUp(FirstName, LastName, Email , Password).then(
    (response) => {
      var user = GetUserInfoFromToken(response.data.token);
      dispatch(SaveUserAction({user}));
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(ErrorBuilder(error));
    }
  );
}
const SignIn = (Email , Password) => (dispatch) => {
  return AuthService.SignIn(Email , Password).then(
    (response) => {
      var user = GetUserInfoFromToken(response.data.token);
      dispatch(SaveUserAction({user}));
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(ErrorBuilder(error));
    }
  );
}

const FbAuth = (token) => (dispatch) => {
    return AuthService.FbAuth(token).then((response) => {
      var user = GetUserInfoFromToken(response.data.token);
      dispatch(SaveUserAction({user}));
      return Promise.resolve();
    },
    (error)=> {

    });
}


const GetUserInfoFromToken = (token) => {
  var user = jwt_decode(token);
  user = {"name":user.unique_name,"id":user.nameid,"email":user.email}
  return user;
}
const ErrorBuilder = (error) => {
  const message = (error.response && error.response.data && error.response.data.errors) || error.message ||error.toString();
  return message;
}

export default {
    SignUp,
    SignIn,
    FbAuth
  };
  