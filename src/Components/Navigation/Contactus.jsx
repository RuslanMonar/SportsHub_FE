import { Link } from "react-router-dom";
import "../../css/contactUs.css";
import React, { useState, useRef } from "react";
import { isEmail } from "validator";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

const ContactUs = () =>{
  const form = useRef();
  const checkBtn = useRef();

    const [FirstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");

    const required = (value) => {
        if (!value) {
          return (
            <div className="alert-wrong" role="alert">
              This field is required!
            </div>
          );
        }
      };
      
      const vname = (value) => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert-wrong" role="alert">
              The name must be between 3 and 20 characters.
            </div>
          );
        }
      };

      const validEmail = (value) => {
        if (!isEmail(value)) {
          return (
            <div className="alert-wrong" role="alert">
              This is not a valid email.
            </div>
          );
        }
      };

      const validPhoneNumber = (value) => {
        if (value.length < 10) {
          return (
            <div className="alert-wrong" role="alert">
              This is not a valid phone number.
            </div>
          );
        }
      };

      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

      const onChangePhoneNumber = (e) => {
        const phone_number = e.target.value;
        setPhone_number(phone_number);
      };
      
      const onChangeFirstName = (e) => {
        const _FirstName = e.target.value;
        setFirstName(_FirstName);
      };

      const SendMess = (e) =>
      {
        e.preventDefault();
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0)
        {
          
        } 
      }


      

    return(
        
       <div className="page">
            <div className="top">
            <Link to="/">
                  <button className="back_to">
                    {"<"} Back to main page
                  </button>
                </Link>
                <div className="top_title ">
                    <h2 className="title">How can we help you?</h2>
                </div>
              <Form className={"Inputform"} onSubmit={SendMess} ref={form}>
                <div className="flex-area">
                    <div className="list">
                        <div className="list_item">
                            <div className="item_title">
                                <p className="firs_item">your name</p>
                            </div>
                            <div className="form-inputs-name">
                            <Input 
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="How should we call you?"
                                value={FirstName}
                                onChange={onChangeFirstName}
                                validations={[required,vname]}
                            />
                            </div>
                        </div>
                        <div className="list_item">
                            <div className="item_title">
                                <p>email</p>
                            </div>
                            <div className="form-inputs">
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
                        <div className="list_item">
                            <div className="item_title">
                                <p>phone number</p>
                            </div>
                            <div className="form-inputs">
                            <Input 
                                type="tel"
                                name="phoneNumber"
                                className="form-input"
                                placeholder="+380960457901"
                                value={phone_number}
                                onChange={onChangePhoneNumber}
                                validations={[required, validPhoneNumber]}
                            />
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="right_item">
                        <div className="item_title">
                            <p className="firs_item">What we need to know</p>
                        </div>
                        <div className="area_text">
                            <textarea name="message4us" className="text_area" placeholder="Write us a message" cols="30" rows="10"></textarea>
                        </div>
                        <button type="button" className="btn"><div className="btn_text">Send message</div></button>    
                    </div>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
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


}
export default ContactUs;