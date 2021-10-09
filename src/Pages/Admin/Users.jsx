import { UsersList } from "./../../Components/Admin/Users/UsersList";
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { UserInfo } from "./../../Components/Admin/Users/UserInfo";
import { Header } from '../../Components/Navigation/Header';

export default function Users() {
  return (
    <div>
    <Header></Header>
    <h1> Users</h1>
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
