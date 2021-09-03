import { RegisterForm } from "../../Components/Auth/RegisterForm";
import "../../css/AuthForm.css";
import { LoginForm } from "./../../Components/Auth/LoginForm";
import { ResetPasswordEmailForm } from "../../Components/Auth/ResetPasswordForms/ResetPasswordEmailForm";
import { ResetPasswordAnswer } from "../../Components/Auth/ResetPasswordForms/ResetPasswordAnswer";
import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";

export const AuthPage = () => {
  const isLogin = () => {
    return window.location.pathname === "/login" ? true : false;
  };

  const isResetPasswordEmail = () => {
    return window.location.pathname === "/resetPassword" ? true : false;
  }
  const isResetPasswordAnswer = () => {
    return window.location.pathname === "/resetPasswordAnswer" ? true : false;
  }

  const getComponent = () => {
    if (isLogin()){
      return <LoginForm />;

    } else if (isResetPasswordEmail()) {
      return <ResetPasswordEmailForm />;
    
    } else if (isResetPasswordAnswer()) {
      return <ResetPasswordAnswer />;

    } else {
      return <RegisterForm />;
    }
  }

  return (
    <div className="form-container">
      <div className="form-content-left">
        <div className="form-img"></div>
      </div>
      <ToastProvider components={{ Toast: ErrorNotification }}>
        {
          getComponent()
        }
      </ToastProvider>
      
    </div>
  );
};
