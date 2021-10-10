import { api } from "./../Config/Axios";

const GetAllTeams = () => {
    return api().get("Teams/GetAllTeams");
  };

export default{
    GetAllTeams
};