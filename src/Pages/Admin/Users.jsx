import { UsersList } from "./../../Components/Admin/Users/UsersList";
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { UserInfo } from "./../../Components/Admin/Users/UserInfo";

export default function Users() {
  return (
    <div>
      <TopMenu />
      <div className="flex central-content">
        <LeftMenu />
        <div className="admin-central-content">
          <UsersList />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
