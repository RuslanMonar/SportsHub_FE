import { useState } from "react";
import { ChangePasswordForm } from "./ChangePassword";
import { PersonalForm } from "./UpdateInfo";


export const PersonalPage = () => {
  const [PersonalInfoActive, setPersonalInfoActive] = useState(true);
  const [ChangePasswordActive, setChangePasswordActive] = useState(false);

  const SwitchToChangePassword = () => {
    if (!ChangePasswordActive) {
      setChangePasswordActive(!ChangePasswordActive);
      setPersonalInfoActive(!PersonalInfoActive);
    }
  };
  const SwitchToPersonalInfo = () => {
    if (!PersonalInfoActive) {
      setChangePasswordActive(!ChangePasswordActive);
      setPersonalInfoActive(!PersonalInfoActive);
    }
  };

  return (
    <div className="userInfo-container2">
      <div className="userInfo-buttons2 flex ">
        <div
          className={
            "flex justify-center align-center " +
            (PersonalInfoActive ? "userInfo-active-button" : "")
          }
          onClick={() => SwitchToPersonalInfo()}
        >
          Personal
        </div>
        <div
          className={
            "flex justify-center align-center " +
            (ChangePasswordActive ? "userInfo-active-button" : "")
          }
          onClick={() => SwitchToChangePassword()}
        >
          ChangePassword
        </div>
      </div>
      {PersonalInfoActive && !ChangePasswordActive && (
        <div>
           <PersonalForm/>
          </div>
      )}
      {ChangePasswordActive && !PersonalInfoActive && (
        <div >
        <ChangePasswordForm/>
        </div>
      )}
    </div>
  );
};
