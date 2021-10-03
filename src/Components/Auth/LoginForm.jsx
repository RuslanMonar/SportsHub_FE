import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "../../css/AuthForm.css";
import { api } from '../../Config/Axios'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthAction from "../../ActionsController/AuthActionController";

import { Link, Redirect } from "react-router-dom";
import { Loader } from "../Additional/Loader";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookApiId, GoogleApiId } from "../../Config/GlobalVariables";
import { GoogleLogin } from "react-google-login";
import { useToasts } from "react-toast-notifications";

export const LoginForm = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();



  const [selectedFile, setSelectedFile] = useState();
const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
};

const handleSubmission = (e) => {
  e.preventDefault();
    var data = new FormData();
    data.append("Name", "Sevilla FC");
    data.append("Location", "Sevilla");
    data.append("CategoryId", 3);
    data.append("SubCategoryId", 5);
    data.append("Image", selectedFile);
    api().post('Teams/add', data)
    .then((response) => {
      console.log(response.data);   
      return response;
    });
};




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

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
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

  const SignIn = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      dispatch(AuthAction.SignIn(email, password))
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setSuccessful(true);
          }, 2000);
        })
        .catch((e) => {
          catchError(e);
        });
    }
  };

  const FbAuth = (data) => {
    setLoading(true);
    dispatch(AuthAction.FbAuth(data.accessToken))
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

  const GoogleAuth = (data) => {
    setLoading(true);
    var ParsedData = {
      Email: data.email,
      FirstName: data.givenName,
      LastName: data.familyName,
      Id: data.googleId,
      ImageUrl: data.imageUrl,
    };

    dispatch(AuthAction.GoogleAuth(ParsedData))
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
        <Link className="header-link" to="/register">
          Get Started
        </Link>
      </div>
      {!loading ? (
        <Form className={"Authform"} onSubmit={SignIn} ref={form}>
          <div className="form-content-right">
            <h1>Log in to Sports Hub</h1>
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
            {error ? (
              <div className={"fail"}>
                <span className={"close-icon"}></span>
                <span>{error + " !"}</span>
              </div>
            ) : null}
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
            <div className="form-inputs">
              <label className="form-label" htmlFor="password">
                PASSWORD
              </label>

              <Link className="forgot-password" to="/resetPassword">
                Forgot Password?
              </Link>
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
            <button className="form-input-btn">LOG IN</button>
            <form encType="multipart/form-data" action="">
                <input type="file" name="file" onChange={changeHandler} />
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </form>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      ) : (
        <Loader />
      )}
      {successful && <Redirect to="/" />}
    </div>
  );
};
