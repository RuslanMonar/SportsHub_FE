import AuthService from "../Services/AuthService"
import { RegisterFailAction, RegisterSuccessAction } from "../ActionsCreator/AuthActions";
import jwt_decode from "jwt-decode";

const SignUp = (FirstName, LastName, Email , Password) => (dispatch) => {
  return AuthService.SignUp(FirstName, LastName, Email , Password).then(
    (response) => {
      var user = jwt_decode(response.data.token);
      user = {"name":user.unique_name,"id":user.nameid,"email":user.email}
      dispatch(RegisterSuccessAction(user));
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.errors) ||
        error.message ||
        error.toString();
      dispatch(RegisterFailAction());
      return Promise.reject(message);
    }
  );
}
export default {
    SignUp
  };
  