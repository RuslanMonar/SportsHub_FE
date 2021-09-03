import { useState, useRef} from "react";
import { useDispatch } from "react-redux";
import "../../../css/AuthForm.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthAction from "../../../ActionsController/AuthActionController";

import { Link, Redirect } from "react-router-dom";
import { Loader } from "../../Additional/Loader";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookApiId, GoogleApiId } from "../../../Config/GlobalVariables";
import { GoogleLogin } from "react-google-login";
import { useToasts } from "react-toast-notifications";

export const RecoveryForm = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const isSamePassword = (value) => {
      if (value != password){
          console.log(value);
        return (
            <div className="alert alert-danger" role="alert">
              Please make sure your passwords match.
            </div>
          );
      }
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
     setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const catchError = (e) => {
    setTimeout(() => {
      setLoading(false);
      if (e.code === 400) {
        setError(e.message);
        setSuccessful(false);
      } else {
        addToast(
          { error: "Something went wrong", message: "Please try again later" },
          {
            appearance: "warning",
            autoDismiss: true,
          }
        );
      }
    }, 2000);
  };

  const SetNewPassword = (e) =>{
      e.preventDefault();
      form.current.validateAll();
      if (checkBtn.current.context._errors.length === 0) {
        setLoading(true);
        console.log("done");
      }
  }

  return (
    <div className={"forms-container"}>
      {!loading ? (
        <Form className={"RecoveryForm"} onSubmit={SetNewPassword} ref={form}>
          <div className="form-content-right">
            <h1>Please enter your new password.</h1>
            {error ? (
              <div className={"fail"}>
                <span className={"close-icon"}></span>
                <span>{error + " !"}</span>
              </div>
            ) : null}
            <div className="form-inputs">
              <label className="form-label" htmlFor="email">
                NEW PASSWORD
              </label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                className="form-input"
                placeholder="6 + characters (letters and numbers)"
                validations={[required]}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label" htmlFor="password">
                CONFIRM PASSWORD
              </label>

              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                className="form-input"
                placeholder="confirm password"
                validations={[required, isSamePassword]}
              />
            </div>
            <button className="form-input-btn">SET NEW PASSWORD</button>
            <a id = "back-to-login" href= "/login">Back to Log In </a>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      ) : (
        <Loader />
      )}
      {successful && <Redirect to="/login" />}
    </div>
  );
};
