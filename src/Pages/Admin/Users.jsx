import { UsersList } from "./../../Components/Admin/Users/UsersList";
import { TopMenu } from './../../Components/Admin/Menu/TopMenu';
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";

export default function Users() {
  return (
    <div>
      <TopMenu />
      <div className="flex central-content">
      <LeftMenu />
      <UsersList />
      </div>
    </div>
  );
}
