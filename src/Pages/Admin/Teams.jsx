import TeamsSlector from './../../Components/Admin/Teams/TeamsSelector';
import { TeamsList } from '../../Components/Admin/Teams/TeamsList';
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { useState } from "react";

export const Teams = () =>{
  return (
    <div>
      <TopMenu header={"Teams"}/>
      <div className="flex central-content">
        <LeftMenu />
        <div className="teams-central-content">
          <TeamsSlector />
          <TeamsList />
        </div>
      </div>
    </div>
  );
};
