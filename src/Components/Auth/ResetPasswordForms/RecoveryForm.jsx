import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../../../css/AuthForm.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthAction from "../../../ActionsController/AuthActionController";

import { Redirect } from "react-router-dom";
import { Loader } from "../../Additional/Loader";
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


  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    let emailAndToken = window.location.search.split("email=")[1].split("?token=");
    setEmail(emailAndToken[0]);
    setToken(emailAndToken[1]);
  }, [])

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

  const isEqual = (value, props, components) => {
    const bothUsed =
      components.password[0].isUsed && components.confirm[0].isUsed;
    const bothChanged =
      components.password[0].isChanged && components.confirm[0].isChanged;

    if (
      bothChanged &&
      bothUsed &&
      components.password[0].value !== components.confirm[0].value
    ) {
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



  const SetNewPassword = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
        dispatch(AuthAction.ResetPassword(email, token, password))
        .then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setSuccessful(true);
        })
        .catch((e) => {
          catchError(e)
        });
    }
  };

  return (
    <div className={"forms-container"}>
        <div className="auth-header">
          <label className="header-label">Don't have an account?</label>
          <a className="header-link" href="/register">Get Started</a>
        </div>
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
                validations={[required, isEqual]}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label" htmlFor="password">
                CONFIRM PASSWORD
              </label>

              <Input
                type="password"
                name="confirm"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                className="form-input"
                placeholder="confirm password"
                validations={[required, isEqual]}
              />
            </div>
            <button className="form-input-btn">SET NEW PASSWORD</button>
            <a id="back-to-login" href="/login">
              Back to Log In{" "}
            </a>
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
