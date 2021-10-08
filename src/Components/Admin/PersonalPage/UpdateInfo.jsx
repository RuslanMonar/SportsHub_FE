import React, { useState, useRef } from "react"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UsersService from "../../../Services/UsersService";
import { isEmail } from "validator";
import "../../../css/ChangePassword.css";
import { Loader } from "../../Additional/Loader";
import { useToasts } from "react-toast-notifications";
import "../../../css/photo.css";


export const PersonalForm = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [Name, setName] = useState("");
  const [Image, setImage] = useState( "./Ellipse.svg");
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      setImage(event.target.result);
    };
  
    reader.readAsDataURL(file);
  }


  const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The name must be between 3 and 20 characters.
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
  
  const onChangeName = (e) => {
    const _FirstName = e.target.value;
    setName(_FirstName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
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
  const UpdateInfo = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      UsersService.UpdateInfo(Name,email,Image)
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setSuccessful(true);
            addToast(
              { error: "Success", message: "Your data is successfully updated!" },
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
        <div className={"forms-containerU"}>
          {!loading ? (
            <Form className={"ChangePasswordForm"} onSubmit={UpdateInfo} ref={form}>
              <div className="form-content-right">
                {error ? (
                  <div className={"fail"}>
                    <span className={"close-icon"}></span>
                    <span>{error + " !"}</span>
                  </div>
                ) : null}
                <div className="page">
              <div className="container2">
             <div className="img-holder">
                  <img src={Image} alt="" id="img" className="img" />
             </div>
            <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={(e)=>onChange(e)}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
            <img
          src="./upload.svg"
          alt="Example1"
          width="40"
          height="40"
          />
            </label>
          </div>
        </div>
      </div>
                <div className="form-inputs">
                  <label className="form-label" htmlFor="password">
                  FIRST NAME
                  </label>
                  <Input
                    type="text"
                    className="form-input"
                    placeholder="Ivan Baloh"
                    name="Name"
                    value={Name}
                    onChange={onChangeName}
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
                  placeholder="vanyabalog@gmail.com"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
                   
                   </div>
                </div>
               
                <button className="form-input-btn">UPDATE PROFILE</button>
              </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
          ) : (
            <Loader />
          )}
          {/* {successful && <Redirect to="/" />} */}
        </div>
    );
};