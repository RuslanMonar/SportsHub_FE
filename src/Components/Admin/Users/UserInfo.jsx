import { useState } from "react";

export const UserInfo = () => {
  const [GeneralInfoActive, setGeneralInfoActive] = useState(true);
  const [TeamsActive, setTeamsActive] = useState(false);

  const SwitchToTeams = () => {
    if(!TeamsActive){
        setTeamsActive(!TeamsActive);
        setGeneralInfoActive(!GeneralInfoActive)
    }
  }
  const SwitchToGeneralInfo = () => {
    if(!GeneralInfoActive){
        setTeamsActive(!TeamsActive);
        setGeneralInfoActive(!GeneralInfoActive)
    }
  }

  return (
    <div className="userInfo-container">
      <div className="userInfo-buttons flex ">
        <div
          className={
            "flex justify-center align-center " +
            (GeneralInfoActive ? "userInfo-active-button" : "")
          }
          onClick={() => SwitchToGeneralInfo()}
        >
          General Info
        </div>
        <div
          className={
            "flex justify-center align-center " +
            (TeamsActive ? "userInfo-active-button" : "")
          }
          onClick={() => SwitchToTeams()}
        >
          Teams
        </div>
      </div>
      <div className="flex user user-big align-center  ">
        <div className="network-status">
          <img
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg"
            alt=""
            className={"user-avatar user-avatar-big"}
          />
          <div className="connection-status connection-status-big"></div>
        </div>
        <span>John Doe</span>
      </div>
      <div className="flex justify-center">
        <div className="flex detail-info">
          <div className="flex detail-info-elem">
            <div className="detail-info-title">Registered</div>
            <div>03/10/2019</div>
          </div>
          <div className="flex detail-info-elem">
            <div className="detail-info-title">Passed Surveys</div>
            <div>10</div>
          </div>
          <div className="flex detail-info-elem">
            <div className="detail-info-title">Teams</div>
            <div>12</div>
          </div>
        </div>
      </div>
    </div>
  );
};
