import { RegisterForm } from "../../Components/Auth/RegisterForm";
import "../../css/AuthForm.css";
import { LoginForm } from "./../../Components/Auth/LoginForm";
import { ResetPasswordEmailForm } from "../../Components/Auth/ResetPasswordForms/ResetPasswordEmailForm";
import { RecoveryForm } from "../../Components/Auth/ResetPasswordForms/RecoveryForm";
import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";

export const AuthPage = () => {
  const isLogin = () => {
    return window.location.pathname === "/login" ? true : false;
  };

  const isResetPasswordEmail = () => {
    return window.location.pathname === "/resetPassword" ? true : false;
  }

  const isRecovery = () => {
    return window.location.pathname === "/recoveryPassword" ? true : false;
  }

  const getComponent = () => {
    if (isLogin()){
      return <LoginForm />;

    } else if (isResetPasswordEmail()) {
      return <ResetPasswordEmailForm />;
    
    } else if (isRecovery()){
      return <RecoveryForm />;
    } else {
      return <RegisterForm />;
    }
  }

  return (
    <div className="form-container">
      <div className="form-content-left">
        <a href="/" className="main-logo">Sports Hub</a>
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
