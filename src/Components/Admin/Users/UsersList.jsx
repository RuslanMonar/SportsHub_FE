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

  // useEffect(() => {
  //   UsersService.GetAllUsers().then((response) => {
  //     setUsers(response.data.users);
  //   });
  // }, []);

  return (
    <div className="Central-page">
      <div className={"flex users-list-container"}>
        <SearchUsers setUsers={setUsers} setLoader={setLoader} />
        
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
            <SortUsers setUsers={setUsers} />
          </div>
          
        </div>
        {!loader ? 
        [users.length>0 && users.map((user) => <UserItem key={user.id} {...user} users={users} setUsers={setUsers} />)]
        : 
        [<Loader width={"7px"} height={"40px"} textAlign={"center"} indentation={"50px"} />]}
      </div>
    </div>
  );
};
