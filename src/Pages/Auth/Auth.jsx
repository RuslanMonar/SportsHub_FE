import { RegisterForm } from "../../Components/Auth/RegisterForm";
import "../../css/AuthForm.css";
import { LoginForm } from "./../../Components/Auth/LoginFom";
import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";

export const AuthPage = () => {
  const checkLogin = () => {
    return window.location.pathname === "/login" ? true : false;
  };

  return (
    <div className="form-container">
      <div className="form-content-left">
        <div className="form-img"></div>
      </div>
      <ToastProvider components={{ Toast: ErrorNotification }}>
        {checkLogin() ? <LoginForm /> : <RegisterForm />}
      </ToastProvider>
    </div>
  );
};
