import AuthService from "../Services/AuthService"
import { LoginFailAction, LoginSuccessAction, RegisterFailAction, RegisterSuccessAction } from "../ActionsCreator/AuthActions";




const SignUp = (FirstName, LastName, Email , Password) => (dispatch) => {
  return AuthService.SignUp(FirstName, LastName, Email , Password).then(
    (response) => {
      console.log(response.data);
      dispatch(RegisterSuccessAction(response.data));
      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: response.data.message,
      // });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch(RegisterFailAction());

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
}
export default {
    SignUp
  };
  