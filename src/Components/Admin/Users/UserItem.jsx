import { React, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../../css/Admin/Users.css";

export default function UserItem({
  id,
  firstName,
  lastName,
  image,
  isBlocked,
  role,
}) {
  var status = isBlocked ? "Blocked" : "Active";
  if (!image) {
    image = "img/users/defaultUserImage.png";
  }
  if (role && role.length > 0) {
    role = role[0];
  } else {
    role = "User";
  }

  status = isBlocked ? "Blocked" : "Active";

  const options = [
    {
      value: isBlocked ? "Activate" : "Block",
      label: isBlocked ? "Activate" : "Block",
      className: isBlocked ? "activateUser" : "blockUser",
    },
    {
      value: "Delete",
      label: "Delete",
      className: "deleteUser",
    },
    {
      value: role == "User" ? "Make as Admin" : "Remove from Admin",
      label: role == "User" ? "Make as Admin" : "Remove from Admin",
      className: role == "User" ? "makeAsAdmin" : "remove-from-admin",
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
        <img src={image} alt="" className={"user-avatar"} />
        <div className="connection-status"></div>
        <span>
          {firstName} {lastName}
        </span>
      </div>
      <div className="status flex">
        <span className={status}>{status}</span>
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
