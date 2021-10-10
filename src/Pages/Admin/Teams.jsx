import TeamsSlector from "./../../Components/Admin/Teams/TeamsSelector";
import { Mapbox } from './../../Components/Admin/Teams/Mapbox';
import { Map } from './../../Components/Admin/Teams/Map';
import { TeamsList } from '../../Components/Admin/Teams/TeamsList';
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { Header } from '../../Components/Navigation/Header';
import { useState } from "react";


export const Teams = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <div>
      <Header></Header>
      <h1> Teams </h1>
      <div className="flex central-content">
        <LeftMenu />
        <div className="teams-central-content">
          <div className="add-team-container">
            {/* <Mapbox /> */}
            <Map  searchInput={searchInput} setSearchInput={setSearchInput}  />
            <TeamsSlector searchInput={searchInput} setSearchInput={setSearchInput} />
          </div>
          <TeamsList />
        </div>
      </div>
    </div>
  );
};
