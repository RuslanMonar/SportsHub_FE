import Dropdown from "react-dropdown";
import "../../../css/Admin/Teams.css";

const TeamsSlector = () => {
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

  return (
    <div className="dropdowns-container">
      <div className="dropdown-option">
        <span>SELECT LOCATION</span>
        <Dropdown className="teams-selector" options={options} placeholder="Select an option" />
      </div>
      <div className="dropdown-option">
        <span>SELECT CATEGORY</span>
        <Dropdown className="teams-selector"  options={options} placeholder="Select an option" />
      </div>
      <div className="dropdown-option">
        <span>SELECT SUBCATEGORY</span>
        <Dropdown className="teams-selector" options={options} placeholder="Select an option" />
      </div>
      <div className="dropdown-option">
        <span>TEAM</span>
        <Dropdown className="teams-selector" options={options} placeholder="Select an option" />
      </div>
    </div>
  );
};

export default TeamsSlector;
