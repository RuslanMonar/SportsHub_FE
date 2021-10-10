import React, { useState, useRef } from "react"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../../../css/ChangePassword.css";
import UsersService from "../../../Services/UsersService";
import { Loader } from "../../Additional/Loader";
import { useToasts } from "react-toast-notifications";
const eye = <img src='./Eye.svg' alt="Example1" width="19" height="10" className="filterit"/>;

export const ChangePasswordForm = () => {
  const form = useRef();
  const newPasswordInput = useRef();
  const checkBtn = useRef();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const { addToast } = useToasts();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  
  };

  const onChangeNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
  };

  
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
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

  const ChangePassword = (e) => {
    
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      UsersService.ChangePassword(password,newPassword)
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setSuccessful(true);
            addToast(
              { error: "Success", message: "Your password is successfully updated!" },
              {
                appearance: "success",
                autoDismiss: true,
              }
            );
          }, 2000);
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
    return (
        <div className={"forms-container2"}>
          {!loading ? (
            <Form className={"ChangePasswordForm"} onSubmit={ChangePassword} ref={form}>
              <div className="form-content-right">
                {error ? (
                  <div className={"fail"}>
                    <span className={"close-icon"}></span>
                    <span>{error + " !"}</span>
                  </div>
                ) : null}
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                    OLD PASSWORD
                  </label>
                  <Input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e)=>onChangePassword(e)}
                    className="ChangePasswordform-input"
                    placeholder=""
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                    NEW PASSWORD
                  </label>
                  <div className="pwd-container">
                  <Input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    value={newPassword}
                    onChange={(e)=>onChangeNewPassword(e)}
                    className="ChangePasswordform-input"
                    placeholder=""
                    validations={[required,vpassword]}
                    ref={newPasswordInput}
                  /> 
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                  </div>
                </div>
                <button className="form-input-btn2">CHANGE PASSWORD</button>
              </div>
   
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
          ) : (
            <Loader />
          )}
          {successful }
        </div>
    );
};