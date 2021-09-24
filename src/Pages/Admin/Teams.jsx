import TeamsSlector from './../../Components/Admin/Teams/TeamsSelector';
import { TeamsList } from '../../Components/Admin/Teams/TeamsList';
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";

export const Teams = () => {
  return (
    <div>
      <TopMenu />
      <div className="flex central-content">
        <LeftMenu />
        <div className="teams-central-content">
          <TeamsSlector />
          <TeamsList />
        </div>
      </div>
    </div>
  );
};
