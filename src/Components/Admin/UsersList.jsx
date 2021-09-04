import { React, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../css/UserList.css";

export default function UsersList() {
  const options = [
    { value: "Block", label: "Block", className: "blockUser" },
    { value: "Delete", label: "Delete", className: "deleteUser" },
    {
      value: "Make as Admin",
      label: "Make as Admin",
      className: "makeAsAdmin",
    },
  ];

  const [defaultOption, setDefaultOption] = useState(options[0]);

  const showAction = (e) => {
    var result = options.findIndex((x) => x.value === e.value);
    setDefaultOption(options[result]);
  };

  var FilteredOptions = options.filter(
    (value) => defaultOption.value != value.value
  );

  return (
    <div className="flex users-list-item align-center">
      <div className="flex user align-center  ">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
          className={"user-avatar"}
        />
        <div className="connection-status"></div>
        <span>Wayd Flores</span>
      </div>
      <div className="status flex">
        <span className="Active">Active</span>
      </div>
      <div className="dropdown flex justify-center">
        <Dropdown
          className={defaultOption.className + ""}
          options={FilteredOptions}
          value={defaultOption}
          onChange={(e) => showAction(e)}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
}
