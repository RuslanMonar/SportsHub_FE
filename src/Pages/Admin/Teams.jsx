import TeamsSlector from "./../../Components/Admin/Teams/TeamsSelector";
import { Mapbox } from './../../Components/Admin/Teams/Mapbox';
import { Map } from './../../Components/Admin/Teams/Map';
import { useState } from "react";
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { Header } from '../../Components/Navigation/Header';
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";

export const Teams = () => {

    const [searchInput, setSearchInput] = useState("")
    

  return (
    <div>
    <Header></Header>
    <h1> Teams</h1>
      <TopMenu />
    <div className="add-team-container">
    <LeftMenu />
        {/* <Mapbox /> */}
        <Map  searchInput={searchInput} setSearchInput={setSearchInput}  />
    
      <TeamsSlector searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
    </div>
  );
};
