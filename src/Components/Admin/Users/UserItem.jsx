import { React, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../../css/Admin/Users.css";
import UsersService from "../../../Services/UsersService";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
  const [isAdmin, setAdmin] = useState((role == "Admin") ? true : false);

  if (!image) {
    image = "img/users/defaultUserImage.png";
  }

  const [options, setOptions] = useState([
    {
      value: isUserBlocked ? "Active" : "Blocked",
      label: isUserBlocked ? "Activate" : "Block",
      className: isUserBlocked ? "activateUser" : "blockUser",
    },
    {
      value: "Delete",
      label: "Delete",
      className: "deleteUser",
    },
    {
      value: isAdmin ? "Remove from Admin" : "Make as Admin",
      label: isAdmin ? "Remove from Admin" : "Make as Admin",
      className: isAdmin ? "remove-from-admin" : "makeAsAdmin",
    },
  ]);

  const [cloneOptions, setCloneOptions] = useState(options);
  const [defaultOption, setDefaultOption] = useState(options[0]);
  
  const showAction = (optionType) => {
    if (optionType.value === "Blocked") {
      alertBlockWindow();
    }
    else if (optionType.value == "Active"){
      UsersService.ChangeStatus(id).then(response => {
        setUserBlocked(!isUserBlocked);
      })
    }
    else if (optionType.value === "Make as Admin" || optionType.value === "Remove from Admin") {
      UsersService.SwitchRoles(id).then(response => {
        setAdmin(!isAdmin);
        setUsers(users.filter((x) => x.id != id));
      })
    }

    else if(optionType.value ==="Delete"){
      alertDeleteWindow();
    }

    var result = options.findIndex((x) => x.value === optionType.value);
    setDefaultOption(options[result]);
  };


  const ShowClick = (focused, optionType) => {
    if (focused && optionType.value === "Blocked") {
      alertBlockWindow();
    }
    else if (focused && optionType.value === "Active"){
      UsersService.ChangeStatus(id).then(response => {
        setUserBlocked(!isUserBlocked);
      })
    }
    else if (focused &&(optionType.value === "Make as Admin" || optionType.value === "Remove from Admin")) {
      UsersService.SwitchRoles(id).then(response => {
        setAdmin(!isAdmin);
        setUsers(users.filter((x) => x.id != id));
      })

    }
    else if(focused &&optionType.value === "Delete"){
      alertDeleteWindow();
    }
  };

  useEffect(() => {
    const newOptions = [...cloneOptions];

    newOptions[0].value = isUserBlocked ? "Active" : "Blocked";
    newOptions[0].label = isUserBlocked ? "Activate" : "Block";
    newOptions[0].className = isUserBlocked ? "activateUser" : "blockUser";

    if (isUserBlocked){
      setOptions([newOptions[0], newOptions[1]]);
    }
    else if (isAdmin == false){
      setOptions(newOptions);
    }
    else{
      newOptions[1].className = "blockUser";

      newOptions[2].value = isAdmin ? "Remove from Admin" : "Make as Admin";
      newOptions[2].label = isAdmin ? "Remove from Admin" : "Make as Admin";
      newOptions[2].className = isAdmin ? "remove-from-admin" : "makeAsAdmin";
      setOptions([newOptions[1], newOptions[2]])
      setDefaultOption(newOptions[2])
    }

  }, [isUserBlocked, isAdmin]);

  var FilteredOptions = options.filter(
    (value) => defaultOption.value != value.value
  );
  
  const refreshUsersList = (id) =>{
    setUsers(users.filter((x) => x.id != id));
  }
  const alertDeleteWindow = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
          return (
            <div className='alert'>
              <div className='trash-icon'></div>
              <b>You are about to delete this user!</b>
              <div className='dividing-line'>This user will be deleted from Sports Hub</div>
              <div className='sure-line'>Are you sure? </div>
              <div className='alert-btnblock'>
                  <button className='alert-cancelbtn' onClick={() => {onClose()}}>Cancel</button>
                  <button className='alert-deletebtn'
                      onClick={() => {
                        UsersService.DeleteUser(id).then(() => {refreshUsersList(id); onClose()});
                      }}>
                      Delete
                  </button>
              </div>            
            </div>
          );
        }
    });
  };

  const alertBlockWindow = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
          return (
            <div className='alert'>
              <div className="block-icon"></div>
              <b>Are you sure you want to block this user!</b>
              <div className='dividing-line'>If you block this user he won't be able </div>
              <div className='sure-line'>to access his Sports Hub account!</div>
              <div className='alert-btnblock'>
                  <button className='alert-cancelbtn' onClick={() => {onClose()}}>No</button>
                  <button className='alert-deletebtn'
                      onClick={() => {
                        UsersService.ChangeStatus(id).then(response => {
                          setUserBlocked(!isUserBlocked); onClose()
                        })
                      }
                      }>
                      Yes
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
