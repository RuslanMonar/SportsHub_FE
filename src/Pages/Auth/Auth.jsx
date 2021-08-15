import { RegisterForm } from "../../Components/Auth/RegisterForm";
import "../../css/AuthForm.css";
import { LoginForm } from "./../../Components/Auth/LoginFom";

export const AuthPage = () => {
  const checkLogin = () => {
    return window.location.pathname === "/login" ? true : false;
  };

  return (
    <div className="form-container">
      <div className="form-content-left">
        <div className="form-img"></div>
      </div>
      {checkLogin() ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};
