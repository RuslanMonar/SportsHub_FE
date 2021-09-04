import React from "react";
import UsersList from "./../../Components/Admin/UsersList";
import "../../css/UserList.css"
export default function Users() {
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
      <UsersList />
    </div>
  );
}
