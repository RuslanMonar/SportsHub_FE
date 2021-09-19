import { React, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../../css/Admin/Users.css";
import UsersService from "../../../Services/UsersService";
<<<<<<< HEAD
=======
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
>>>>>>> Added alert window to list of users

export default function UserItem({
  id,
  firstName,
  lastName,
  image,
  isBlocked,
  role,
  users,
  setUsers
}) {
  const [isUserBlocked, setUserBlocked] = useState(isBlocked);
  var status = isUserBlocked ? "Blocked" : "Active";

  if (!image) {
    image = "img/users/defaultUserImage.png";
  }
  if (role && role.length > 0) {
    role = role[0];
  } else {
    role = "User";
  }

  const [options, setOptions] = useState([
    {
      value: isUserBlocked ? "Activate" : "Block",
      label: isUserBlocked ? "Activate" : "Block",
      className: isUserBlocked ? "activateUser" : "blockUser",
    },
    {
      value: "Delete",
      label: "Delete",
      className: "deleteUser",
    },
    {
      value: role === "User" ? "Make as Admin" : "Remove from Admin",
      label: role === "User" ? "Make as Admin" : "Remove from Admin",
      className: role === "User" ? "makeAsAdmin" : "remove-from-admin",
    },
  ]);

  const [defaultOption, setDefaultOption] = useState(options[0]);
  // const [status, setStatus] = useState(nowStatus);

  const showAction = (e) => {
    if(e.value ==="Delete"){
      alertWindow();
      return;
    }
    var result = options.findIndex((x) => x.value === e.value);
    setDefaultOption(options[result]);
  };


  const ShowClick = (focused, optionType) => {
    if (focused &&(optionType.value == "Blocked" || optionType.value == "Active")) {
      UsersService.ChangeStatus(id).then(response => {
        setUserBlocked(!isUserBlocked);
      })
      
    }
  };
  useEffect(() => {
    var newelement = {
      value: isUserBlocked ? "Activate" : "Block",
      label: isUserBlocked ? "Activate" : "Block",
      className: isUserBlocked ? "activateUser" : "blockUser",
    };
    const newOpions = [...options];
    newOpions[0].value = isUserBlocked ? "Active" : "Blocked";
    newOpions[0].label = isUserBlocked ? "Activate" : "Block";
    newOpions[0].className = isUserBlocked ? "activateUser" : "blockUser";
    setOptions(newOpions);
  }, [isUserBlocked]);

  var FilteredOptions = options.filter(
    (value) => defaultOption.value != value.value
  );

  // const refreshUsersList = (id) =>{
  //   for(var count = 0; count < users.length; count++){
  //     if(users.map(()))
  //   }
  //   setUsers(users);
  // }

  const alertWindow = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
          return (
            <div className='alert'>
              <div className='trash-icon'></div>
              <b>You are about to delete this user!</b>
              <div className='dividing-line'>This user will be deleted from Sports Hub</div>
              <div className='sure-line'>Are you sure? </div>
              <div className='alert-btnblock'>
                  <button className='alert-cancelbtn' onClick={onClose}>Cancel</button>
                  <button className='alert-deletebtn'
                      onClick={() => {
                        UsersService.DeleteUser(id).then(() => {onClose()});
                      }}>
                      Delete
                  </button>
              </div>            
            </div>
          );
        }
    });
  };

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
          onFocus={(e) => ShowClick(e, defaultOption)}
          options={FilteredOptions}
          value={defaultOption}
          onChange={(e) => showAction(e)}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
}
