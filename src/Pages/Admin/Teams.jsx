import TeamsSlector from "./../../Components/Admin/Teams/TeamsSelector";
import { Mapbox } from './../../Components/Admin/Teams/Mapbox';
import { Map } from './../../Components/Admin/Teams/Map';
import { useState } from "react";



export const Teams = () => {

    const [searchInput, setSearchInput] = useState("")
    

  return (
    <div className="add-team-container">
        {/* <Mapbox /> */}
        <Map  searchInput={searchInput} setSearchInput={setSearchInput}  />
    
      <TeamsSlector searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
};
