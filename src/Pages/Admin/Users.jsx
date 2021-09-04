import UsersList from "./../../Components/Admin/UsersList";
import "../../css/UserList.css";
import { useEffect } from "react";
import UsersService from "../../Services/UsersService";
import { useState } from "react";
export default function Users() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    UsersService.GetAllUsers().then((response) => {
      setUsers(response.data.users);
      
    });
  }, []);

  return (
    <div className={"flex users-list-container"}>
      <div className="flex users-list-item align-center list-header">
        <div className="flex user align-center  list-header-font">
          <span>Name</span>
        </div>
        <div className="status flex list-header-font">
          <span>Status</span>
        </div>
        <div className="dropdown flex justify-center list-header-font">
          <div className="status flex">
            <span>Actions</span>
          </div>
        </div>
      </div>
      {users
        ? users.map((user) => <UsersList key={user.id} {...user} />)
        : null}
    </div>
  );
}
