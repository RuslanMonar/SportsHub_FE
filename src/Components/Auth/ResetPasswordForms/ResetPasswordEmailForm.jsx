import { useState, useRef } from "react";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import "../../../css/AuthForm.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link, Redirect } from "react-router-dom";
import { Loader } from "../../Additional/Loader";

import AuthAction from "../../../ActionsController/AuthActionController";

export const ResetPasswordEmailForm = () => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [email, setEmail] = useState("");
    
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
  
    const validEmail = (value) => {
      if (!isEmail(value)) {
        return (
          <div className="alert alert-danger" role="alert">
            This is not a valid email.
          </div>
        );
      }
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
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


    const sendEmail = () => {
        setSuccessful(true);
        setEmail(email);
        dispatch(AuthAction.SendForgotPasswordEmail(email))
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setSuccessful(true);
          }, 2000);
        })
        .catch((e) => {
          catchError(e);
        });
      };

    return (
      <div className={"forms-container"}>
        <div className="auth-header">
          <label className="header-label">Don't have an account?</label>
          <a className="header-link" href="/register">Get Started</a>
        </div>
        {!loading ? (
          <Form className={"ResetPasswordEmailForm"}  onSubmit={sendEmail} ref={form}>
            <div className="form-content-right">
              <h1>Forgot your password?</h1>
        
              <h2>Enter your email address below and we’ll get you back on track.</h2>
              <div className="form-inputs">
                <label className="form-label" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <Input
                  type="text"
                  name="email"
                  className="form-input"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <button className="form-input-btn" onClick={sendEmail} >REQUEST RESET LINK</button>
              <a id = "back-to-login" href= "/login">Back to Log In </a>
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        ) : (
          <Loader />
        )}
        {successful && <Redirect to={{pathname: "/resetPasswordAnswer", state: {email: email}}} />}
      </div>
    );
  };
  