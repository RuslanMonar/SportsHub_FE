import { useEffect, useState } from "react";
import UsersService from "../../../Services/UsersService";
import "../../../css/Admin/Users.css";
import UserItem from "./UserItem";
import { SearchUsers } from "./SearchUers";
import { SortUsers } from "./SortUsers";
import { Loader } from "../../Additional/Loader";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [allPersons, setAllPersons] = useState(0);
  const [amountUsers, setAmountUsers] = useState(0);
  const [amountAdmins, setAmountAdmins] = useState(0);
  const [person, setPerson] = useState(true);

  UsersService.GetAllUsers().then((response) => {
      setAllPersons(response.data.users.length);
  });

  useEffect(() => {  
    if (person){
      setAmountAdmins(allPersons - users.length)
      setAmountUsers(users.length)
    }
    else{
      setAmountUsers(allPersons - users.length)
      setAmountAdmins(users.length)
    }
  }, [users]);

  return (
      <div className={"flex users-list-container"}>
        <div className="user-admin-search">
            <button  className="users-admins-buttons users-admin-text"
            onClick = {() => {setPerson(true)}}>USERS ({amountUsers})</button>
            <button  className="users-admins-buttons users-admin-text"
            onClick = {() => {setPerson(false)}}>ADMINS ({amountAdmins})</button>
          <SearchUsers setUsers={setUsers} setLoader={setLoader} setPerson={person}/>
        </div>
        <div className="flex users-list-item align-center list-header">
          <div className="flex user align-center  list-header-font">
            <span>Name</span>
          </div>
          <div className="status flex list-header-font">
            <span>Status</span>
          </div>
          <div className="dropdown flex justify-center list-header-font">
            <div className="status flex users-list-actions">
              <span>Actions</span>
            </div>
             <SortUsers setUsers={setUsers} show={person}/>
          </div>
          
        </div>
        {!loader ? 
        [users.length>0 && users.map((user) => <UserItem key={user.id} {...user} users={users} setUsers={setUsers}/>)]
        : 
        [<Loader width={"7px"} height={"40px"} textAlign={"center"} indentation={"50px"} />]}
      </div>
    
  );
};
