import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../../../css/AuthForm.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Loader } from "../../Additional/Loader";

export const ResetPasswordAnswer = () => {
    const form = useRef();
    const email =useLocation().state.email
    return (
      <div className={"forms-container"}>
        {(
          <Form className={"ResetPasswordAnswer"} ref={form}>
            <div className="form-content-right">
              <img alt="mail" src="img/auth/mail.png" id="mail-logo"></img>
              <img alt="mail" src="img/auth/white_mail.png" id="white-mail-logo"></img>
              <h1>Check your email {email}</h1>
        
              <h2>If there's Sports Hub account linked to this email address, we'll send over instructions to reset your password.</h2>
            </div>
          </Form>
        )}
      </div>
    );
  };
  