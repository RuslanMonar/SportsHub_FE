import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthAction from "../../ActionsController/AuthActionController";

import "../../css/AuthForm.css";
import "../../css/GlobalStyles/main.css";

import { Loader } from "./../Additional/Loader";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookApiId, GoogleApiId } from "./../../Config/GlobalVariables";
import { GoogleLogin } from 'react-google-login';

export const RegisterForm = () => {
  // ----------------- Хуки -----------------

  const form = useRef();
  const checkBtn = useRef();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // ----------------- Валідатори -----------------
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The name must be between 3 and 20 characters.
        </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    } else if (!/\d/.test(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must contains digits
        </div>
      );
    } else if (!/[a-z]/.test(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must contains lowercase letters
        </div>
      );
    } else if (!/[A-Z]/.test(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must contains uppercase letters
        </div>
      );
    } else if (!/[#?!@$%^&*+?:'=_\-]/.test(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must contains non-alphanumeric character
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

  // ----------------- Зміна значень інпутів  -----------------

  const onChangeFirstName = (e) => {
    const _FirstName = e.target.value;
    setFirstName(_FirstName);
  };

  const onChangeLastName = (e) => {
    const _LastName = e.target.value;
    setLastName(_LastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const SingUp = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      dispatch(AuthAction.SignUp(FirstName, LastName, email, password))
        .then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setSuccessful(true);
          setMessage(
            "Congratulations " +
              FirstName +
              ", you have registered successfully 🥳"
          );
        })
        .catch((e) => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setError(e);
          setSuccessful(false);
        });
    }
  };

  const FbAuth = (data) => {
    setLoading(true);
    dispatch(AuthAction.FbAuth(data.accessToken))
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setMessage("Congratulations, you have registered successfully 🥳");
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        setSuccessful(false);
      });
  };


  const GoogleAuth = (data) => {
    setLoading(true)
    var ParsedData = {"Email":data.email , 
    "FirstName":data.givenName , 
    "LastName":data.familyName , 
    "Id":data.googleId , 
    "ImageUrl":data.imageUrl}

    dispatch(AuthAction.GoogleAuth(ParsedData))
    .then(() => {
      setTimeout(() => {
        setLoading(false);
        setSuccessful(true);
        setMessage("Congratulations, you have registered successfully 🥳");
      }, 2000);
    })
    .catch((e) => {
      setLoading(false);
      setError(e);
      setSuccessful(false);
    })
}

  return (
    <div className={"forms-container"}>
      {!loading ? (
        <Form className={"Authform"} onSubmit={SingUp} ref={form}>
          {!successful && (
            <div className="form-content-right">
              <h1>Create Account</h1>
              <div className="pictures-form">
                <FacebookLogin
                  appId={FacebookApiId}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={(response) => FbAuth(response)}
                  render={(renderProps) => (
                    <svg
                      onClick={renderProps.onClick}
                      className="facebookIconCircle"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z"
                        stroke="black"
                      />
                      <path
                        className="facebookIconLetter"
                        d="M21 14.9962H18.2755V13.3247C18.2755 12.6969 18.7202 12.5506 19.0335 12.5506C19.346 12.5506 20.9562 12.5506 20.9562 12.5506V9.79092L18.3083 9.78125C15.3689 9.78125 14.6999 11.8395 14.6999 13.1567V14.9962H13V17.8399H14.6999C14.6999 21.4893 14.6999 25.8865 14.6999 25.8865H18.2755C18.2755 25.8865 18.2755 21.446 18.2755 17.8399H20.6882L21 14.9962Z"
                        fill="black"
                      />
                    </svg>
                  )}
                />

                <GoogleLogin
                  clientId={GoogleApiId}
                  render={(renderProps) => (
                    <svg
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={"googleSvg"}
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.7988 33C25.6354 33 32.7988 25.8366 32.7988 17C32.7988 8.16344 25.6354 1 16.7988 1C7.96227 1 0.798828 8.16344 0.798828 17C0.798828 25.8366 7.96227 33 16.7988 33Z"
                        stroke="black"
                      />
                      <path
                        className={"googleSvgElem"}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4483 17.001C12.4483 16.4814 12.5345 15.9832 12.6886 15.5159L9.9924 13.457C9.4669 14.5239 9.1709 15.7262 9.1709 17.001C9.1709 18.2749 9.46665 19.4763 9.99127 20.5425L12.686 18.4797C12.5334 18.0145 12.4483 17.5182 12.4483 17.001Z"
                        fill="black"
                      />
                      <path
                        className={"googleSvgElem"}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1821 12.2727C18.3109 12.2727 19.3306 12.6727 20.1317 13.3273L22.4622 11C21.0421 9.76363 19.2213 9 17.1821 9C14.0161 9 11.2951 10.8105 9.99219 13.456L12.6883 15.5149C13.3096 13.6291 15.0804 12.2727 17.1821 12.2727Z"
                        fill="black"
                      />
                      <path
                        className={"googleSvgElem"}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1821 21.7265C15.0806 21.7265 13.3097 20.3701 12.6884 18.4844L9.99219 20.5429C11.2951 23.1888 14.0161 24.9993 17.1821 24.9993C19.1361 24.9993 21.0017 24.3054 22.4018 23.0054L19.8426 21.0269C19.1204 21.4818 18.2111 21.7265 17.1821 21.7265Z"
                        fill="black"
                      />
                      <path
                        className={"googleSvgElem"}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.8293 16.9994C24.8293 16.5267 24.7564 16.0175 24.6471 15.5449H17.1821V18.6358H21.4791C21.2643 19.6897 20.6795 20.4998 19.8426 21.027L22.4019 23.0055C23.8726 21.6405 24.8293 19.607 24.8293 16.9994Z"
                        fill="black"
                      />
                    </svg>
                  )}
                  buttonText="Login"
                  onSuccess={(response) => GoogleAuth(response.profileObj)}
                />
              </div>
              <div className="text-reg">
                <p>Or use your email for registration:</p>
              </div>
              {error ? (
                <div className={"fail"}>
                  <span className={"close-icon"}></span>
                  <span>{error + " !"}</span>
                </div>
              ) : null}
              <div className="names-form">
                <div className="form-inputs-name">
                  <label className="form-label" htmlFor="firstName">
                    FIRST NAME
                  </label>
                  <Input
                    type="text"
                    className="form-input"
                    placeholder="John"
                    name="firstName"
                    value={FirstName}
                    onChange={onChangeFirstName}
                    validations={[required, vname]}
                  />
                </div>
                <div className="form-inputs-name">
                  <label htmlFor="username" className="form-label">
                    LAST NAME
                  </label>
                  <Input
                    type="text"
                    name="lasttName"
                    className="form-input"
                    placeholder="Doe"
                    value={LastName}
                    onChange={onChangeLastName}
                    validations={[required, vname]}
                  />
                </div>
              </div>
              <div className="form-inputs">
                <label className="form-label" htmlFor="email">
                  EMAIL
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
              <div className="form-inputs">
                <label className="form-label" htmlFor="password">
                  PASSWORD
                </label>
                <Input
                  type="text"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  className="form-input"
                  placeholder="6 + characters (letters and numbers)"
                  validations={[required, vpassword]}
                />
              </div>
              <button className="form-input-btn">SIGN UP</button>
              <Link to="/login"> Login</Link>
            </div>
          )}

          {message && (
            <div className="form-group">
              <Fade duration={2000}>
                <img alt="success" src="img/auth/success.png"></img>
                <div className="success-message">{message}</div>

                <Link to="/">
                  <button className="default-button go-home-button">
                    Back to main page
                  </button>
                </Link>
              </Fade>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};
