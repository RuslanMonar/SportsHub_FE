import Dropdown from "react-dropdown";
import "../../../css/Admin/Teams.css";
import Dropzone from "./DropZone";
import { useState } from "react";

const TeamsSlector = () => {
  const [file, setFile] = useState([]);
  const options = [
    {
      value: "USA",
      label: "USA",
    },
    {
      value: "Loas Angeles",
      label: "Loas Angeles",
    },
  ];

  const handleDropZoneChange = (files) => {
    setFile(
      files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  return (
    <div className="dropdowns-container">
      <div className="dropdown-option">
        <span>SELECT LOCATION</span>
        <Dropdown
          className="teams-selector"
          options={options}
          placeholder="Select an option"
        />
      </div>
      <div className="dropdown-option">
        <span>SELECT CATEGORY</span>
        <Dropdown
          className="teams-selector"
          options={options}
          placeholder="Select an option"
        />
      </div>
      <div className="dropdown-option">
        <span>SELECT SUBCATEGORY</span>
        <Dropdown
          className="teams-selector"
          options={options}
          placeholder="Select an option"
        />
      </div>
      <div className="dropdown-option">
        <span>TEAM</span>
        <Dropdown
          className="teams-selector"
          options={options}
          placeholder="Select an option"
        />
      </div>
      
      <Dropzone onChange={handleDropZoneChange} />

      <div
        onClick={() => console.log(file)}
        className="teams-dropdown-button teams-dropdown-button-red"
      >
        Add to list
      </div>
      <div className="teams-dropdown-button">Cancel</div>
    </div>
  );
};

export default TeamsSlector;
