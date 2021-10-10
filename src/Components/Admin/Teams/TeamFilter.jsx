
import "../../../css/GlobalStyles/main.css"
import "../../../css/Admin/Teams.css";

import { useState } from "react";
import Dropdown from "react-dropdown";

const TeamsFilter = () => {
    
    const [location, setLocation] = useState ([
      {
        value: "USA",
        label: "USA",
      }
      

    ]);
    const [category, setCategory] = useState ([
      {
        value: "NBA",
        label: "NBA",
      },
      {
        value: "FBA",
        label: "FBA",
      }
    ]);
    const [subcategoty, setSubcategory] = useState ([
      {
        value: "Western Conference",
        label: "Western Conference",
      }
    ]);
    const [team,setTeam] = useState ([
      {
        value: "Boston Celtics",
        label: "Boston Celtics",
      },
      {
        value: "Chicago Bulls",
        label: "Chicago Bulls",
      },
      {
        value: "Atlanta Hawks",
        label: "Atlanta Hawks",
      },
      {
        value: "Flight",
        label: "Flight",
      },
      {
        value: "Crocs",
        label: "Crocs",
      }

      

    ]);





    return(
        
        <div className="dropdowns-container">
        <div className="dropdown-option">
          <span>SELECT LOCATION</span>
          <Dropdown
            className="teams-selector"
            options={location}
            placeholder="All"
          />
        </div>
        <div className="dropdown-option">
          <span>SELECT CATEGORY</span>
          <Dropdown
            className="teams-selector"
            options={category}
            placeholder="All"
          />
        </div>
        <div className="dropdown-option">
          <span>SELECT SUBCATEGORY</span>
          <Dropdown
            className="teams-selector"
            options={subcategoty}
            placeholder="All"
          />
        </div>
        <div className="dropdown-option">
          <span>TEAM</span>
          <Dropdown
            className="teams-selector"
            options={team}
            placeholder="Name of Team"
          />
        </div>

        <div
       
        className="teams-dropdown-button teams-dropdown-button-red"
        >
        Apply
      </div>
      <div className="teams-dropdown-button">Cancel</div>
        
        </div>
    


    );
    
}
export default TeamsFilter;