import React, { useState, useRef } from "react"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";
import UsersService from "../../Services/UsersService";
import { isEmail } from "validator";
import "../../css/ChangePassword.css";
import { Loader } from "./../Additional/Loader";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";


export  const ContactUsForm = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [FirstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="warning" role="alert">
          The name must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="warning" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const onChangeFirstName = (e) => {
    const _FirstName = e.target.value;
    setFirstName(_FirstName);
  };

  const onChangePhone = (e) => {
    const _LastName = e.target.value;
    setPhone(_LastName);
  };
  const onChangeMessage = (e) => {
    const _message = e.target.value;
    setMessage(_message);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  

  const required = (value) => {
    if (!value) {
      return (
        <div className="warning" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const ContactUs = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      UsersService.ContactUs(FirstName,email,phone,message)
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setSuccessful(true);
            addToast(
              { error: "Success", message: "Your message has been sent" },
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
      <div>
        <Link className="header-link" to="/">{"<"} Back to the main page</Link>
        <div className={"forms-container"}>
          <div className="top_title ">
                    <h2 className="title">How can we help you?</h2>
                </div>
          {!loading ? (
            <Form className={"ChangePasswordForm"} onSubmit={ContactUs} ref={form}>
              <div className="form-content-right">
                {error ? (
                  <div className={"fail"}>
                    <span className={"close-icon"}></span>
                    <span>{error + " !"}</span>
                  </div>
                ) : null}
            <div className="flex-container">
              <div className ="left_column">
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                  YOUR NAME
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
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                  EMAIL
                  </label>
                  <div className="pwd-container">
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
                </div>
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                  PHONE NUMBER
                  </label>
                  <div className="pwd-container">
                  <Input
                    type="text"
                    name="phone"
                    className="form-input"
                    placeholder="phone"
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required]}
                  
                />
                </div>
              
                   
                   </div>
                </div>
              <div className = "right_column">
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                  WHAT WE NEED TO KNOW
                  </label>
                  <div className="pwd-container">
                  <Textarea
                  
                  type="text"
                  name="message"
                  className="form-input textarea"
                  placeholder="Leave your comment..."
                  value={message}
                  onChange={onChangeMessage}
                  validations={[required]}
                />
              </div>
              </div>
                   
                   </div>
                </div>
                
              </div>
              <button className="form-input-btn">Send message</button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
          ) : (
            <Loader />
          )}
          {/* {successful && <Redirect to="/" />} */}
        </div>
        <div className="bottom">
                <div className="bottom_title">
                    <h2 className="title_bot">Our contacts</h2>
                </div>
                <div className="info">
                    <div className="small_info_raw">
                        <p className="small_info">adress</p>
                        <p className="small_info">tel.</p>
                        <p className="small_info">mail</p>
                    </div>
                    <div className="big_info_raw">
                        <p className="big_info">2D Sadova Street Lviv 79021</p>
                        <p className="big_info">+380322409999</p>
                        <p className="big_info">sports.hub@info.com</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};