import AuthService from "../Services/AuthService"
import { LoginFailAction, LoginSuccessAction, RegisterFailAction, RegisterSuccessAction } from "../ActionsCreator/AuthActions";
import jwt_decode from "jwt-decode";

const SignUp = (FirstName, LastName, Email , Password) => (dispatch) => {
  return AuthService.SignUp(FirstName, LastName, Email , Password).then(
    (response) => {
      console.log(response.data);
      dispatch(RegisterSuccessAction(jwt_decode(response.data.token)));
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
  